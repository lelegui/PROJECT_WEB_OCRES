import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';


class Foot extends Component {
    constructor(props){
        super(props);
        this.state = {
            clubs: undefined,
            competition: undefined,
            resume: undefined,
            image: undefined
        }
        this.getFoot();
    }

    getFoot = async () => {
        const api_call = await fetch('https://www.scorebat.com/video-api/v3/');
        const data = await api_call.json();
        console.log(data);
        this.setState({
            clubs: data.response[0].title,
            competition: data.response[0].competition,
            resume: data.response[0].matchviewUrl,
            image: data.response[0].thumbnail
        });
    }

    render() {
        return (
            <div>
                <h2 className="py-3">Football</h2>
                
                <div className="foot-container font-weight-bold">
                <Row>
                    <Col lg={7} md={6} sm={12} xs={12}>
                    <p>Clubs: {this.state.clubs}</p>
                    <p>Competition: {this.state.competition}</p>
                    <img src={this.state.image} className="photoMatch" alt="match"></img>
                    </Col>
                    <Col lg={5} md={4} sm={12} xs={12}>
                        <br></br>
                    <iframe id="Foot"
                        title="Resume foot"
                        width="290"
                        height="320"
                        src={this.state.resume}>
                    </iframe>
                    </Col>
                </Row>
                </div>
            </div>
        );
    }
}

export default Foot;