import React from "react";
import axios from "axios";

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`${this.state.title} has been recorded !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Error adding the movie`);
      });
  }

  render() {
    return (
      <div className="FormMovie">
        <h1>What is your favorite movie ?</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Movie Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Title*</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
                required
                minLength="1"
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster*</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
                required
                minLength="1"
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Comment*</label>
              <textarea
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
                required
                minLength="1"
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
