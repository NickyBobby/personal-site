import C from '../constants';
import { database } from '../firebaseApp';

const projectsRef = database.ref('projects');

export const listenToProjects = () => {
	return (dispatch) => {
		projectsRef.off();
		projectsRef.on('value', (snapshot) => {
			dispatch({
				type: C.PROJECTS_RECEIVE_DATA,
				data: snapshot.val()
			});
		}, (error) => {
			dispatch({
				type: C.PROJECTS_RECEIVE_DATA_ERROR,
				message: error.message
			});
		});
	};
};

export const submitProject = (content) => {
	return (dispatch, getState) => {
		const state = getState();
		const project = {
			content,
			username: state.auth.username,
			uid: state.auth.uid
		};
		dispatch({ type: C.PROJECT_AWAIT_CREATION_RESPONSE });
		projectsRef.push(project, (error) => {
			dispatch({ type: C.PROJECT_RECEIVE_CREATION_RESPONSE });
			if (error) {
				dispatch({
					type: C.FEEDBACK_DISPLAY_ERROR,
					error: `Submission failed! ${error}`
				});
			} else {
				dispatch({
					type: C.FEEDBACK_DISPLAY_MESSAGE,
					message: 'Submission successfully saved!'
				});
			}
		});
	};
};

export const startProjectEdit = (pid) => {
	return (dispatch) => {
		dispatch({ type: C.PROJECT_EDIT, pid });
	};
};

export const cancelProjectEdit = (pid) => {
	return (dispatch) => {
		dispatch({ type: C.PROJECT_EDIT_FINISH, pid });
	};
};

export const submitProjectEdit = (pid, content) => {
	return (dispatch, getState) => {
		const state = getState();
		const project = {
			content,
			username: state.auth.username,
			uid: state.auth.uid
		};
		dispatch({ type: C.PROJECT_EDIT_SUBMIT, pid });
		projectsRef.child(pid).set(project, (error) => {
			dispatch({ type: C.PROJECT_EDIT_FINISH, pid });
			if (error) {
				dispatch({
					type: C.FEEDBACK_DISPLAY_ERROR,
					error: `Update failed! ${error}`
				});
			} else {
				dispatch({
					type: C.FEEDBACK_DISPLAY_MESSAGE,
					message: 'Update successfully saved!'
				});
			}
		});
	};
};

export const deleteProject = (pid) => {
	return (dispatch) => {
		dispatch({ type: C.PROJECT_EDIT_SUBMIT, pid });
		projectsRef.child(pid).remove((error) => {
			dispatch({ type: C.PROJECT_EDIT_FINISH, pid });
			if (error) {
				dispatch({
					type: C.FEEDBACK_DISPLAY_ERROR,
					error: `Deletion failed! ${error}`
				});
			} else {
				dispatch({
					type: C.FEEDBACK_DISPLAY_MESSAGE,
					message: 'Project successfully deleted!'
				});
			}
		});
	};
};
