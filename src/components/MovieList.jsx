import Movie from './Movie.js';
import SearchBar from './SearchBar.js';
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
      <table class="outertable">
        <tr>
          <th> MovieList </th>
        </tr>
        <SearchBar class="searchbar"/>
        <table class="list">
          {this.state.movies.map( (movie) =>
            <Movie movie= {movie}/>)}
        </table>

      </table>
    );
  }
}

export default MovieList;