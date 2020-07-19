import Movie from 'Movie.js';

class MovieList extends React.Component {

  constructor(props) {
    super(props);

    this.state(
      movies : [];
    )
  }


  render () {
    return (
      <div>
      {this.props.movies.map( (movie) =>
        <Movie movie= {movie}/>)}
      </div>
    )
  }
}

export default MovieList;