import React, {Component} from 'react'
import { Link } from "react-router-dom";
import Like from './common/Like'
import Table from './common/Table'

class MoviesTable extends Component {

    columns = [
        { path: 'title', lable: 'Title', content: movie => <Link to={`/movie/${movie._id}`}>{movie.title}</Link>},
        { path: 'genre.name', lable: 'Genre' },
        { path: 'numberInStock', lable: 'Stock' },
        { path: 'dailyRentalRate', lable: 'Rate' },
        { key: 'like', content: movie => <Like liked={movie.liked} onLikeToggle={() => this.props.onLikeMovie(movie)} /> },
        { key: 'delete', content: movie => <button className="btn btn-danger" onClick={() => this.props.onDeleteMovie(movie._id)}>Delete</button> },
    ]
    render() {
        const {  movies, onSort, sortColumn } = this.props
        return (
            <>
                <Table data={movies} columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
                
            </>
        ) 
    }
}
 
export default MoviesTable;

