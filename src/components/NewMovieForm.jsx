import React  from 'react';
import Joi from 'joi-browser'
import {getGenres} from '../services/fakeGenreService'
import Form from './common/Form'

class NewMovieForm extends Form {
  state = {
    data: { title: "", genre: getGenres(), numberInStock: "", rate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
    rate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };
  render() {
    return (
      <div className="container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre")}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {/* {this.renderButton("Save")} */}
          <button
            // disabled={this.validate()}
            className="btn btn-primary"
            onClick={() => this.props.history.push("/movies")}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
 
export default NewMovieForm;