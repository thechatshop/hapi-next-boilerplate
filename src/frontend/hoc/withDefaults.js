import { compose } from 'recompose';
import { observer } from 'mobx-react';
import withBlueprintCss from './withBlueprintCss';
import withScreen from './withScreen';
import withState from './withState';
import requireAuth from './requireAuth';

import SignIn from '../components/sign-in';

const reactiveAuth = compose(
	observer,
	requireAuth(
		({ state }) => state.user.isAuthenticated(),
		props => <SignIn onClick={props.state.user.login} />
	)
);

const withDefaults = compose(
	withBlueprintCss,
	withScreen,
	withState,
	reactiveAuth
);

export { withBlueprintCss, withDefaults, withScreen, observer, requireAuth };
