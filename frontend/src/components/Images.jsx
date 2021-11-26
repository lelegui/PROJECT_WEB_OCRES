import React, { Component } from 'react';

class Images extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: undefined
        }
        this.getImages();
    }

    getImages = async () => {
        const api_call = await fetch('https://randomfox.ca/floof/');
        const data = await api_call.json();
        console.log(data);
        this.setState({
            image: data.image
        });
    }

    render() {
        return (
            <div>
                <h2 className="py-3">Images of the day</h2>
                <img src={this.state.image} className="images-container" alt="Image"></img>
            </div>
        );
    }
}

export default Images;