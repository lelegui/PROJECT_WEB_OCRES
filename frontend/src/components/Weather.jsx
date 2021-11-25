import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

const API = "ac156d7e0497ba1cd37142f49280cc88"

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined
        }
        this.getWeather();
    }

    getWeather = async () => {
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=' + API +'&units=metric');
        const data = await api_call.json();
        console.log(data);
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description
        });
    }

    render() {
        return (
            <div>
                <h2 className="py-3">Weather</h2>
                
                <Row className="weather-container text-center">
                    <Col lg={{size: 2, offset:1}} md={4} xs={12}>
                        <h5 className="text-light font-weight-bold">TEMPERATURE</h5>
                        <h3 className="text-light font-weight-bold">{this.state.temperature}°C</h3>
                    </Col>
                    <Col lg={2} md={4} xs={12}>
                        <h5 className="text-light font-weight-bold">CITY</h5>
                        <h3 className="text-light font-weight-bold">{this.state.city}</h3>
                    </Col>
                    <Col lg={2} md={4} xs={12}>
                        <h5 className="text-light font-weight-bold">COUNTRY</h5>
                        <h3 className="text-light font-weight-bold">{this.state.country}</h3>
                    </Col>
                    <Col lg={{size: 2, offset: 0}} md={{size: 4, offset:2}} xs={12}>
                        <h5 className="text-light font-weight-bold">HUMIDITY</h5>
                        <h3 className="text-light font-weight-bold">{this.state.humidity}%</h3>
                    </Col>
                    <Col lg={2} md={4} xs={12}>
                        <h5 className="text-light font-weight-bold">DESCRIPTION</h5>
                        <h4 className="text-light font-weight-bold">{this.state.description}</h4>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Weather;