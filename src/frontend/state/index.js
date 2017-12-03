import { types, onSnapshot } from 'mobx-state-tree';
import User from './user';

const State = types.model('State', {
	user: User
});

const initialSnapshot = {
	user: {
		token: null
	}
};

const state = State.create(initialSnapshot);

onSnapshot(state, snapshot => {
	// TODO: Handle snapshot
	console.dir(snapshot);
});

if (typeof window !== 'undefined') {
	window.state = state;
}

export default state;
