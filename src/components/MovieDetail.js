import React from 'react';
import { useParams } from 'react-router-dom';

function withParams(MovieDetail) {
    return props => <MovieDetail {...props} params={useParams()} />;
  }

 class MovieDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        }
    }
    componentDidMount() {
        const { id } = this.props.params;
        fetch(`http://localhost:9000/movies/${id}`).then(res => res.json()).then(movie =>
            this.setState({'movie': movie})
        );
    }

    render() {
        return (
            <div className='movie-detail container'>
                <img className='movie-banner' src={this.state.movie.banner} alt=""/>
                <div className="detail-body">
                    <div>
                        <h2 className="card-title">{this.state.movie.title}
                            <span className='release-year'> {this.state.movie.release_year}</span>
                        </h2>
                        <div className='detail-description'>
                            <p className='card-description'>{this.state.movie.description}</p>
                        </div>
                    </div>
                    <div className='images'>
                        <img className='detail-img' src={this.state.movie.image} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withParams(MovieDetail);
 