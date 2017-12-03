import state from './index';

describe('state.user', () => {
	it('should have user', () => {
		expect(state.user).toBeTruthy();
	});

	it('should have login(payload) action');
	it('should have logout(id) action');

	it('should have isAuthenticated() view', () => {
		expect(state.user.isAuthenticated).toBeTruthy();
	});
});
