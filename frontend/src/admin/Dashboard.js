import React from "react";
import ReactDOM from "react-dom";
import '../index.css';

import ApiProfile from "./APIprofile";

//Affichage et donnée du dashboard avec la database

const apiProfile = new ApiProfile();
    
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
            deleteValue: "",
            firstName: "", lastName: "", age: "", country: "", city: "", president: "",
            updateFirstName: "", updateLastName: "", updateAge: "", updateCountry: "", updateCity: "", updatePresident: "", updateId: "",
            successValue: "",
            successUpdate: "",
            isLoaded: false,
        };

        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        apiProfile
            .getAllProfiles()
            .then(data => {
                // assign to requested URL as define in array with array index.
                const data_profile = data;
                this.setState({
                            isLoaded: true,
                            profiles: data_profile
                        })
                        console.log(this.state);
            })
    }

    // supprimer un profil

    DeleteProfile()
    {
        var name = this.state.deleteValue;
        if(window.confirm(`Do you really want to delete ${name}`)) {
            apiProfile.deleteProfile(name);
            window.location.reload(false);
        }
    }

    // ajouter un nouveau profil

    CreateProfile() {
        const profile = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            country: this.state.country,
            city: this.state.city,
            president: this.state.president,
        };
        apiProfile
            .createProfile(profile)
            .then(res => {
                const data = res.data;
                if (data !== '') {
                    this.setState({ successValue: "Completed" })
                    setTimeout(function () {
                        window.location.reload(false);
                    }, 2000);
                } else {
                    alert("Can't add new data on database");
                }
            })

    }

    // update

    AddProfileOnUpdate(item) {
        this.setState({
            updateFirstName: item.firstName,
            updateLastName: item.lastName,
            updateAge: item.age,
            updateCountry: item.country,
            updateCity: item.city,
            updatePresident: item.president,
            updateId: item._id
        })
        
    }

    // update

    UpdateProfile() {
        const profile = {
            firstName: this.state.updateFirstName,
            lastName: this.state.updateLastName,
            age: this.state.updateAge,
            country: this.state.updateCountry,
            city: this.state.updateCity,
            president: this.state.updatePresident,
            id: this.state.updateId
        };

        var id = profile.id;
        console.log(profile);
        apiProfile
            .updateProfile(profile)
            .then(res => {
                const data = res.data;
                if (data !== '') {
                    this.setState({ successUpdate: "Completed" })
                    setTimeout(function () {
                        window.location.reload(false);
                    }, 2000);
                } else {
                    alert("Can't add new data on database");
                }
            })

    }

    handleChange(choice, event) {
        switch (choice) {
            case 'delete':
                this.setState({ deleteValue: event.target.value });
                break;
            case 'firstName':
                this.setState({ firstName: event.target.value });
                break;
            case 'lastName':
                this.setState({ lastName: event.target.value });
                break;
            case 'age':
                this.setState({ age: event.target.value });
                break;
            case 'country':
                this.setState({ country: event.target.value });
                break;
            case 'city':
                this.setState({ city: event.target.value });
                break;
            case 'president':
                this.setState({ president: event.target.value });
                break;
            case 'updateFirstName':
                this.setState({ updateFirstName: event.target.value });
                break;
            case 'updateLastName':
                this.setState({ updateLastName: event.target.value });
                break;
            case 'updateAge':
                this.setState({ updateAge: event.target.value });
                break;
            case 'updateCountry':
                this.setState({ updateCountry: event.target.value });
                break;
            case 'updateCity':
                this.setState({ updateCity: event.target.value });
                break;
            case 'updatePresident':
                this.setState({ updatePresident: event.target.value });
                break;
            default:
                break;
        }
    }

    // affichage de la database et des fonctions

    render() {  
        var { isLoaded, profiles } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else{
            return (   
                    <div className="container-fluid">
                        <div className="create">
                            <div className="row input-section">
                                <h3 className="py-3">Presidential poll<br></br></h3>
                                <div className="col-12"><br></br></div>
                                <input type="text" className="col-5" value={this.state.firstName} placeholder="First Name" required onChange={(e) => this.handleChange("firstName", e)} />
                                <div className="col-1"/>
                                <input type="text" className="col-5" value={this.state.lastName} placeholder="Last Name" required onChange={(e) => this.handleChange("lastName", e)} />
                                <div className="col-12"><br></br></div>
                                <input type="text" className="col-5" value={this.state.age} placeholder="Age" required onChange={(e) => this.handleChange("age", e)} />
                                <div className="col-1"/>
                                <input type="text" className="col-5" value={this.state.country} placeholder="Country" required onChange={(e) => this.handleChange("country", e)} />
                                <div className="col-12"><br></br></div>
                                <input type="text" className="col-5" value={this.state.city} placeholder="City" required onChange={(e) => this.handleChange("city", e)} />
                                <div className="col-1"/>
                                <input type="text" className="col-5" value={this.state.president} placeholder="President" required onChange={(e) => this.handleChange("president", e)} />
                                <div className="col-12"><br></br></div>
                                <button type="button" className="col-auto" onClick={() => this.CreateProfile()}>Add</button>
                                <div className="col-12"><br></br></div>
                                <div className="col-12"><br></br></div>
                            </div>
                            <div className="row justify-content-end success">{this.state.successValue}</div>
                        </div>

                        <div className='table_profiles'>
                        <h3 className="py-3">Dashboard<br></br><br></br></h3>
                            <table>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Country</th>
                                    <th>City</th>
                                    <th>President</th>
                                </tr>
                                    {profiles.data.map(item => (
                                        <tr>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.age}</td>
                                        <td>{item.country}</td>
                                        <td>{item.city}</td>
                                        <td>{item.president}</td>
                                        <td><button type="button" className="col-auto" onClick={() => this.AddProfileOnUpdate(item)}>Update</button></td>
                                    </tr>
                                    ))}
                            </table>
                        </div>
                        
                        <div className="delete">
                            <div className="row input-section">
                            <div className="col-12"><br></br></div>
                            <div className="col-12"><br></br></div>
                                <input type="text" className="col-2" value={this.state.deleteValue} placeholder="Last name" required onChange={(e) => this.handleChange("delete", e)} />
                                <button type="button" className="col-auto" onClick={() => this.DeleteProfile()}>Delete</button>
                                <div className="col-12"><br></br></div>
                                <div className="col-12"><br></br></div>
                            </div>
                        </div>
                        
                        <div className="update">
                            <div className="row input-section">
                                <input type="text" className="col-2" value={this.state.updateFirstName} placeholder="First Name" required onChange={(e) => this.handleChange("updateFirstName", e)} />
                                <input type="text" className="col-2" value={this.state.updateLastName} placeholder="Last Name" required onChange={(e) => this.handleChange("updateLastName", e)} />
                                <input type="text" className="col-2" value={this.state.updateAge} placeholder="Age" required onChange={(e) => this.handleChange("updateAge", e)} />
                                <input type="text" className="col-2" value={this.state.updateCountry} placeholder="Country" required onChange={(e) => this.handleChange("updateCountry", e)} />
                                <input type="text" className="col-2" value={this.state.updateCity} placeholder="City" required onChange={(e) => this.handleChange("updateCity", e)} />
                                <input type="text" className="col-2" value={this.state.updatePresident} placeholder="President" required onChange={(e) => this.handleChange("updatePresident", e)} />
                                <div className="col-12"><br></br></div>
                                <button type="button" className="col-auto" onClick={() => this.UpdateProfile()}>Update</button>
                            </div>
                            <div className="row justify-content-end success">{this.state.successUpdate}</div>
                        </div>

                    </div>
            );
        }
        
        
    } 
};

export default Dashboard;

