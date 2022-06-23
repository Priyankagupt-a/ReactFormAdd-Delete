
import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    location: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.location === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", location: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Name & Location</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>location</label>
            <input
              type="text"
              name="location"
              placeholder="location"
              value={this.state.location}
              onChange={(e) => this.setState({ location: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
