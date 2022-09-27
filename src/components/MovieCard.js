import React from 'react';
import { Navigate } from 'react-router-dom';

export default class MovieCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    render() {
        return (
            <div className='movie-card'
                onClick={() => this.setState({ redirect: true })} >
                <img className="card-img" src={this.props.movie.imageUrl} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{this.props.movie.title}</h2>
                    <p className='card-description'>{this.props.movie.short_description}</p>
                    {this.state.redirect && (

                        <Navigate to={`/movies/${this.props.movie.id}`} />
                    )
                    }
                </div>
            </div>
        )
    }
}