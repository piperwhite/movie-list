import Movie from './Movie.js';
import SearchBar from './SearchBar.js';
import movies from '../data/moviedata.js';

class MovieList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: movies,
      filteredMovies: movies,
      query: ''
    };
    this.onSearched = this.onSearched.bind(this);
    this.onChanged = this.onChanged.bind(this);
  }

  onSearched(event) {
    event.preventDefault();
    var newMovies = this.state.query === '' ? this.state.movies : this.state.movies.filter(movie => movie.title.includes(this.state.query));
    this.setState({
      filteredMovies: newMovies
    });
  }

  onChanged(query) {
    this.setState({query: query});
  }

  render () {
    return (
      <table className="outertable">
        <thead>
          <tr>
            <th> MovieList </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <SearchBar className="searchbar" handleChange={this.onChanged} onSearched= {this.onSearched}/>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table className="list">
                        <tbody>
                          {(this.state.filteredMovies.length !== 0) ?
                          this.state.filteredMovies.map( (movie) => <Movie movie= {movie}/>) : 'no movie by that name found'}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieList;