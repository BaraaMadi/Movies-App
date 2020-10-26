import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { Paginate } from "../utils/Paginate";
import { Link } from "react-router-dom";
import _ from "lodash";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./MoviesTable";
import Pagination from "./common/Pagination";
import SearchBox from "./common/SearchBox";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4, // 4 rows
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    searchMovie: "",
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres }); // genres : genres
  }

  handelDelete = (id) => {
    const movies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies]; // (9) [ {..}, {..}, ..]
    const index = movies.indexOf(movie); //index = 0
    movies[index] = { ...movies[index] }; // movies[0] = {...}
    movies[index].liked = !movies[index].liked; // false to true
    this.setState({ movies }); // change in state
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1, searchMovie: "" });
  };
  // path = column
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleSearch = (e) => {
    console.log("search for :" , e.target.value)
    this.setState({ searchMovie: e.target.value });
  };
  handelFiltter = (selectedGenre, allMovies, searchMovie) => {
    if (selectedGenre && selectedGenre._id)
       return allMovies.filter((m) => m.genre._id === selectedGenre._id);
   
    else if (searchMovie) return allMovies.filter((m) =>m.title.toLowerCase().startsWith(searchMovie.toLowerCase()) );
    return allMovies;
  };

  getPageData = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      searchMovie,
    } = this.state;

    const filtered = this.handelFiltter(selectedGenre, allMovies, searchMovie);
    // const filtered = 
    // selectedGenre && selectedGenre._id
    //   ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
    //   : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = Paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length: count } = this.state.movies;

    const { pageSize, currentPage, genres, sortColumn } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;
    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <Link
              to="/movie/new"
              className="btn btn-primary"
              style={{ marginBottom: "25px" }}
            >
              New Movie
            </Link>
            <p>Showing is {totalCount} movies in the database.</p>
            <SearchBox
              serachMovie={this.state.searchMovie}
              onChange={this.handleSearch}
            />
            <MoviesTable
              count={count}
              movies={movies}
              sortColumn={sortColumn}
              onDeleteMovie={this.handelDelete}
              onLikeMovie={this.handleLike}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChaneg={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
