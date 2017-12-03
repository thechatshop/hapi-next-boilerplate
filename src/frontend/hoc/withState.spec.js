import { shallow, mount } from 'enzyme';
import withState from './withState';

const SimpleComponent = () => <p>Lorem ipsum</p>;
const Wrapper = withState(() => <SimpleComponent />);

describe('withState component', () => {
	test('renders okay', () => {
		expect(shallow(<Wrapper />));
	});

	test('contains simple component', () => {
		expect(mount(<Wrapper />).contains('Lorem ipsum')).toBe(true);
	});

	test('contains state inside props', () => {
		const WrappedP = withState(({ state }) => <div>{typeof state}</div>);

		expect(mount(<WrappedP />).contains('object')).toBe(true);
	});
});
