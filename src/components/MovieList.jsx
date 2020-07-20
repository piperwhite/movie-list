import Movie from './Movie.js';
import movies from '../data/moviedata.js';

class MovieList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies : movies
    };
  }


  render () {
    return (
      <div>
        {this.state.movies.map( (movie) =>
          <Movie movie= {movie}/>)}
      </div>
    );
  }
}

export default MovieList;