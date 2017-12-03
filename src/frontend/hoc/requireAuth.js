import { branch, renderComponent } from 'recompose';

const requireAuth = (userAuthenticated, LeftComponent) =>
	branch(
		props => !userAuthenticated(props),
		renderComponent(props => <LeftComponent {...props} />)
	);

export default requireAuth;
