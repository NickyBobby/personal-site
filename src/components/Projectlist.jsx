import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactRedux from 'react-redux';
import Project from 'project.component.jsx'

const C = require("../../constants");
const _ = require("lodash");
let actions = require("../../actions/");

class ProjectList extends Component {
  newProject() {
    if (!this.props.projects.submitting) {
      e.preventDefault();
      this.props.submitNewProject(this.refs.newproject.value);
      this.refs.newproject.value = '';
    }
  }

  render() {
    let p = this.props;
    let rows = _.map(p.projects.data, function(project, pid) {
      let projectstate = p.projects.states[pid];
      return <Project
              key={qid}
              project={project}
              pid={pid}
              state={projectstate}
              edit={p.startEdit.bind(this, pid)}
              cancel={p.cancelEdit.bind(this, pid)}
              submit={p.submitEdit.bind(this, pid)}
              delete={p.deleteQuote.bind(this, pid)}
              mayedit={p.auth.uid === project.uid}
            />;
        }).reverse();
        return (
          <div className="projectslist">
            {p.auth.uid ? <form className="newprojectform" onSubmit={this.newProject}}>
              <input ref="newproject" placeholder="project name" />
              <button type="submit" disabled={p.projects.submittingnew}>{p.projects.submittingnew ? "Submitting..." : "Submit"}</button>
            </form> : <p>Log in to add a new project</p>}
            {p.projects.hasreceiveddata ? rows : "Loading projects..."}
          </div>
        );
  }
};

let mapStateToProps = (appState) => {
  return {
    projects: appState.projects,
    auth: appState.auth
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    submitNewProject: (content) => { dispatch(actions.submitNewProject(content)); },
    startEdit: (pid) => { dispatch(actions.startProjectEdit(pid)); },
    cancelEdit: (pid) => { dispatch(actions.cancelProjectEdit(pid)); },
    submitEdit: (pid) => { dispatch(actions.submitProjectEdit(pid)); },
    deleteEdit: (pid) => { dispatch(actions.deleteProject(pid)); },
  }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ProjectList);
