import { types } from 'mobx-state-tree';

const User = types
	.model('User', {
		accessToken: types.maybe(types.string),
		entityId: types.maybe(types.string),
		license: types.maybe(types.string)
	})
	.actions(self => ({
		login() {
			window.accountsInstance.openPopup();
		},

		logout(id) {
			throw new Error('Not implemented');
		},

		storeUserCredentials({ access_token, entity_id, license }) {
			self.accessToken = access_token;
			self.entityId = entity_id;
			self.license = license.toString();
		}
	}))
	.views(self => ({
		isAuthenticated() {
			return self.accessToken ? true : false;
		}
	}));

export default User;
