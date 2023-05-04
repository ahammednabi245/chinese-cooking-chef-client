import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    comment: ''
  }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log('Comment submitted: ', this.state.comment);
  }

  render() {
    return (
      <div className=" p-10">

        {/* Comment form */}

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="comment" className='card-title my-3'>Comment:</label>
            <textarea
              id="comment"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
              className="form-control w-6/12 h-80 text-white bg-slate-700 "
              placeholder="Enter your comment here"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="btn bg-gradient-to-r from-red-800 to-red-600 border-none my-4">Submit</button>
        </form>
      </div>
    );
  }
}

export default Feedback;
