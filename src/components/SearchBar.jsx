class SearchBar extends React.Component {
  render() {
    return (
      <form className="search" onSubmit={event => this.props.onSearched(event)}>
        <input type="text" onChange={event => this.props.handleChange(event.target.value)} placeholder="Search.."></input>
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    );
  }
}

export default SearchBar;