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
                <h3 className="py-3">Football</h3>
                
                <div className="foot-container font-weight-bold">
                <Row>
                    <Col lg={7} md={6} sm={12} xs={9}>
                    <div className="center">
                    <p>Clubs: {this.state.clubs}</p>
                    <p>Competition: {this.state.competition}</p>
                    <img src={this.state.image} className="photoMatch" alt="match"></img>
                    </div>
                    </Col>
                    <Col lg={5} md={4} sm={12} xs={12}>
                        <br></br>
                    <div className="center">
                    <iframe id="Foot"
                        title="Resume foot"
                        width="295"
                        height="257"
                        src={this.state.resume}>
                    </iframe>
                    </div>
                    </Col>
                </Row>
                </div>
            </div>
        );
    }
}

export default Foot;