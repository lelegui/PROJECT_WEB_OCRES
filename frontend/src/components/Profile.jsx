import React, { Component } from 'react';
import ApiProfile from '../admin/APIprofile';

const apiProfile = new ApiProfile();

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: undefined,
            prenom: undefined,
            nom: undefined,
            age: undefined,
            country: undefined,
            city: undefined,
            mail: undefined
        }
        this.getProfile();
    }

    getProfile = async () => {
        const api_call = await fetch('https://randomuser.me/api/');
        const data = await api_call.json();
        console.log(data);
        this.setState({
            image: data.results[0].picture.medium,
            prenom: data.results[0].name.first,
            nom: data.results[0].name.last,
            age: data.results[0].dob.age,
            country: data.results[0].location.country,
            city: data.results[0].location.city,
            mail: data.results[0].email
        });

        apiProfile
                .createProfile(Profile)
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
            
    }
    

    render() {
        return (
            <div>
                <h3 className="py-3">Random profiles</h3>
                <div className="profile-container font-weight-bold">
                    <img src={this.state.image} className="photoUser" alt="user"></img>
                <p><br></br>First Name: {this.state.prenom}</p>
                <p>Last Name: {this.state.nom}</p>
                <p>Age: {this.state.age}</p>
                <p>Country: {this.state.country}</p>
                <p>City: {this.state.city}</p>
                <p>Mail: {this.state.mail}</p>
                </div>
            </div>
        );
    }
}

export default Profile;