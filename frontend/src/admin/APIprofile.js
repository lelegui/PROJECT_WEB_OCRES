import axios from "axios";

//API pour chaque fonction de la database

export default class ApiProfile {
    getAllProfiles() {
        return axios
        .get("http://localhost:3002/profiles", {crossdomain: true})
    }

    deleteProfile(name) {
        axios.delete(`http://localhost:3002/profiles/${name}`, {crossdomain: true})
    }

    createProfile(profile) {
        return axios
        .post("http://localhost:3002/profiles", profile, {crossdomain: true})
    }

    updateProfile(profile) {
        return axios
        .put(`http://localhost:3002/profiles/${profile.id}`, profile, {crossdomain: true})
    }
}