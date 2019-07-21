import React from 'react';
import './App.css';

class NasaImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'url': null
        };
    }

    reload() {
        const url = `https://images-api.nasa.gov/asset/${this.props.match.params.nasa_id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const items = data.collection.items;
                this.setState({
                    'url': items[3].href
                });
            });
    }

    componentWillReceiveProps() {
        this.reload();
    }

    componentDidMount() {
        this.reload();
    }

    render() {
        const url = this.state.url;
        return !url ? <p>Loading image...</p> : <img src={url} alt="NASA archive" />;
    }
}

export default NasaImage;