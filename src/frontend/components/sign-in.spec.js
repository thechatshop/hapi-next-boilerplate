import { shallow } from 'enzyme';
import SignIn from './sign-in';

describe('SignIn component', () => {
	test('calls onClick', () => {
		const mockClick = jest.fn();
		const button = shallow(<SignIn onClick={mockClick} />);
		button.simulate('click');

		expect(mockClick.mock.calls.length).toBe(1);
	});
});
