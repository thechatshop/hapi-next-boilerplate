import { render } from 'enzyme';
import requireAuth from './requireAuth';

const SimpleComponent = () => <p>Lorem ipsum</p>;
const AuthComponent = () => <p>Ask for sign in</p>;

describe('RequireAuth component', () => {
	test('renders authorization component if user is not authenticated', () => {
		const ProtectedComponent = requireAuth(
			() => false,
			() => <AuthComponent />
		)(SimpleComponent);

		expect(
			render(<ProtectedComponent />)
				.toString()
				.includes('Ask for sign in')
		).toBe(true);
	});

	test('renders wrapped component if user is authenticated', () => {
		const ProtectedComponent = requireAuth(() => true, () => <AuthComponent />)(
			SimpleComponent
		);

		expect(
			render(<ProtectedComponent />)
				.toString()
				.includes('Lorem ipsum')
		).toBe(true);
	});
});
