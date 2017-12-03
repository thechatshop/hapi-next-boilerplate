import { withHandlers } from 'recompose';
import { Button, Intent } from '@blueprintjs/core';

const SignInButton = withHandlers(props => ({
	onClickHandler: () => props.onClick
}))(props => (
	<Button
		intent={Intent.PRIMARY}
		onClick={props.onClickHandler}
		text="Sign in using LiveChat"
	/>
));

export default SignInButton;
