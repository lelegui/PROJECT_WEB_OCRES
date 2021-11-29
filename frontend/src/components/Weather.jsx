import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            temp: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            icone: undefined
        }
        this.getWeather();
    }

    getWeather = async () => {
        const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=ac156d7e0497ba1cd37142f49280cc88&units=metric');
        const data = await api_call.json();
        console.log(data);
        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icone: <img src= {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
        });
    }

    render() {
        return (
            <div>
                <h3 className="py-3">Weather</h3>
                
                <Row className="weather-container text-center">
                    <Col lg={{size: 2, offset:1}} md={4} xs={12}>
                        <div className="center">
                            <h5 className="text-light font-weight-bold">TEMPERATURE</h5>
                            <br/><br/>
                            <h3 className="text-light font-weight-bold">{this.state.temp}°C</h3>
                        </div>
                        
                    </Col>
                    <Col lg={2} md={4} xs={12}>
                        <div className="center">
                            <h5 className="text-light font-weight-bold">CITY</h5>
                            <br/><br/>
                            <h4 className="text-light font-weight-bold">{this.state.city}</h4>
                        </div>
                        
                    </Col>
                    <Col lg={2} md={4} xs={12}>
                        <div className="center">
                            <h5 className="text-light font-weight-bold">COUNTRY</h5>
                            <br/><br/>
                            <h4 className="text-light font-weight-bold">{this.state.country}</h4>
                        </div>
                        
                    </Col>
                    <Col lg={{size: 2, offset: 0}} md={{size: 4, offset:2}} xs={12}>
                        <div className="center">
                            <h5 className="text-light font-weight-bold">HUMIDITY</h5>
                            <br/><br/>
                            <h4 className="text-light font-weight-bold">{this.state.humidity}%</h4>
                        </div>
                        
                    </Col>
                    <Col lg={2} md={4} xs={12}>
                        <div className="center">
                            <h5 className="text-light font-weight-bold">DESCRIPTION</h5>
                            <h4 className="text-light font-weight-bold">{this.state.icone}</h4>
                            <h4 className="text-light font-weight-bold">{this.state.description}</h4>
                        </div>
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Weather;