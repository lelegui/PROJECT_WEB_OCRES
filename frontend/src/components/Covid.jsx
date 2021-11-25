import React, { Component } from 'react';

class Covid extends Component {
    constructor(props){
        super(props);
        this.state = {
            pays: undefined,
            total: undefined,
            death: undefined,
            ratio: undefined
        }
        this.getCovid();
    }

    getCovid = async () => {
        const api_call = await fetch('https://api.quarantine.country/api/v1/summary/latest');
        const data = await api_call.json();
        console.log(data);
        this.setState({
            pays: data.data.regions.france.name,
            total: data.data.regions.france.total_cases,
            death: data.data.regions.france.deaths,
            ratio: data.data.regions.france.death_ratio
        });
    }

    render() {
        return (
            <div>
                <h2 className="py-3">Covid-19 in France</h2>
                <div className="covid-container font-weight-bold">
                <p>Pays: {this.state.pays}</p>
                <p>Nombre de cas total: {this.state.total}</p>
                <p>Nombre total de mort: {this.state.death}</p>
                <p>Ratio: {this.state.ratio}</p>
                </div>
            </div>
        );
    }
}

export default Covid;