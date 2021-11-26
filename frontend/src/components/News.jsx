import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            section: undefined,
            date: undefined,
            titre: undefined,
            article: undefined
        }
        this.getNews();
    }

    getNews = async () => {
        const api_call = await fetch('https://content.guardianapis.com/search?page=2&q=debate&api-key=test');
        const data = await api_call.json();
        console.log(data);
        this.setState({
            section: data.response.results[0].sectionName,
            date: data.response.results[0].webPublicationDate,
            titre: data.response.results[0].webTitle,
            article: data.response.results[0].webUrl
        });
    }

    render() {
        return (
            <div>
                <h2 className="py-3">Article - The Guardian</h2>
                <div className="news-container font-weight-bold text-light">
                <Row>
                    <Col lg={8} md={6} xs={12}>
                    <img src="https://www.marketmakers.co.uk/wp-content/uploads/2020/01/460x215-TheGuardian-White-1.png" className="logo" alt="logo" />
                        <h5><br></br>Title: {this.state.titre}</h5>
                    </Col>
                    <Col lg={4} md={4} xs={12}>
                            <p>Section: {this.state.section}</p>
                            <p>Date: {this.state.date}</p>
                        <div className="article-container">
                            <p><a href = {this.state.article}>read the article</a></p>
                        </div>
                    </Col>
                </Row>
                </div>
            </div>
        );
    }
}

export default News;