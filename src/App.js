import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

class NasaImages extends React.Component {
    constructor() {
        super();

        this.state = {
            'images': null
        };
    }

    componentDidMount() {
        fetch('https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    'images': data.collection.items
                });
            });
    }

    render() {
        const images = this.state.images;
        return (
            <main className="container-fluid">
                <header className="row">
                    <div className="col"><h1>Nasa Images</h1></div>
                </header>
                <div className="row">
                    <Router>
                        <nav className="col-4">
                            <ul>
                                {!images ? 'Loading...' : images.map(image => (
                                    <li key={image.data[0].nasa_id}>
                                        <Link to={`/image/${image.data[0].nasa_id}`}>{image.data[0].title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <article className="col">
                            <Route path="/image/:nasa_id" component={NasaImage} />
                        </article>
                    </Router>
                </div>
            </main>
        );
    }
}

function App() {
    return <NasaImages />;
}

export default App;
