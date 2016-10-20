import C from '../../constants';

const initialState = {
	hasReceivedData: false,
	submittingNew: false,
	errorMessage: '',
	data: {},
	status: {},
};

export default (state, action) => {
	let newstate;
	switch (action.type) {
		case C.PROJECTS_RECEIVE_DATA:
			return Object.assign({}, state, {
				hasReceivedData: true,
				data: action.data,
				errorMessage: ''
			});
		case C.PROJECTS_RECEIVE_DATA_ERROR:
			return Object.assign({}, state, {
				data: null,
				errorMessage: action.message
			});
		case C.PROJECT_AWAIT_CREATION_RESPONSE:
			return Object.assign({}, state, {
				submittingNew: true
			});
		case C.PROJECT_RECEIVE_CREATION_RESPONSE:
			return Object.assign({}, state, {
				submittingNew: false
			});
		case C.PROJECT_EDIT:
			newstate = Object.assign({}, state);
			newstate.status[action.pid] = C.PROJECT_EDITING;
			return newstate;
		case C.PROJECT_EDIT_FINISH:
			newstate = Object.assign({}, state);
			delete newstate.status[action.pid];
			return newstate;
		case C.PROJECT_EDIT_SUBMIT:
			newstate = Object.assign({}, state);
			newstate.status[action.pid] = C.PROJECT_SUBMITTING;
			return newstate;
		default: return state || initialState;
	}
};
