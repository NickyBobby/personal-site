import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import '../App.css';
const C = require("../../constants");
class Project extends Component {

  submit(e) {
      let p = this.props;
      let name = this.refs.name;
      p.submit(name.value);
      name.value = "";
      e.preventDefault();
  }

  render() {

    let p = this.props;
    let q = p.project;
    let button;

    if (p.state === C.EDITING_PROJECT) {
      return (
        <form className="project" onSubmit={this.submit}>
          <input ref="name" defaultValue={q.content} />
          <button type="button" onClick={p.cancel}>Cancel</button>
          <button type="button" onClick={this.submit}>Submit</button>
        </form>
      );
    }
    if (!p.mayedit) {
      button = '';
    } else if (p.state === C.SUBMITTING_QUOTE) {
      button = <button disabled="disabled">Submitting</button>;
    } else {
      button = <span><button onClick={p.edit}>Edit</button> <button onClick={p.delete}>Delete</button></span>;
    }

    return <div className="project"><span className="author">{`${q.username} said: `}</span>{q.content} {button}</div>;
  }
}

export default Project;
