import React from "react";
import ReactDOM from "react-dom";
import '../index.css';

// All Component use for our Widgets
import Profile from "../components/Profile";
import Graphique from "../components/Graphique";

import ApiProfile from "./APIProfile";

const apiProfile = new ApiProfile();

// All urls link for the widget page
var urls = [
    'http://localhost:3000/profiles'
]

// Function to check the status of the API
function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function parseJSON(response) {
return response.json();
}

class Widgets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: [],
            all_profiles: [],
            isLoaded: false,
        }
    }

    // On start web page do this...
    componentDidMount() {
        // For all API
        Promise.all(urls.map(url =>
            fetch(url)
                .then(checkStatus)  // check the response of our APIs
                .then(parseJSON)    // parse it to Json
                .catch(error => console.log('There was a problem!', error))
        ))
            .then(data => {
                // assign to requested URL as define in array with array index.
                const data_profile = data[0];
                const data_all_profiles = data[5];
                this.setState({
                            isLoaded: true,
                            profile: data_profile,
                            all_profiles: data_all_profiles
                        })
                        // console.log(this.state);
                        // Create const Profile to inject in our own Database
                        const profile = {
                        firstName: this.state.profile.results[0].name.first,
                        lastName: this.state.profile.results[0].name.last,
                        age: this.state.profile.results[0].registered.age,
                        country: this.state.profile.results[0].location.country,
                        city: this.state.profile.results[0].location.city
            };
            // Inject the new profile load on our Database
            apiProfile
                .createProfile(profile)
                .then(res => {
                    const data = res.data;
                    if (data !== '') {
                        this.setState({ successValue: "Completed" })
                        setTimeout(function () {
                        }, 2000);
                    } else {
                        alert("Can't add new data on database");
                    }
                })         
            })
    }

    render() {

        var { isLoaded, profile, all_profiles } = this.state;

        // If don't get already our data of API...
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        // Render all the html for all our Widgets
        else {
            return (   
                <div class="widgets">
                    <div class="container_fluid">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                                {profile.results.map(item => (
                                    <Profile
                                        key={item.id}
                                        item={item}
                                    />
                                ))}
                            </div>
            
                            <div class="col-12 col-sm-12 col-md-8 col-lg-7 col-xl-7">
                                <Graphique
                                    item={all_profiles}
                                />
                            </div>  
                        </div>      
                    </div> 
                </div>
            );
        }
        
    } 
};

export default Widgets;