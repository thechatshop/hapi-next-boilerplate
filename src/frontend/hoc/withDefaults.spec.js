import { shallow, mount } from 'enzyme';
import withDefaults from './withState';

const SimpleComponent = () => <p>Lorem ipsum</p>;
const Wrapper = withDefaults(() => <SimpleComponent />);

describe('withDefaults component', () => {
	test('renders okay', () => {
		expect(shallow(<Wrapper />));
	});

	test('contains simple component', () => {
		expect(mount(<Wrapper />).contains('Lorem ipsum')).toBe(true);
	});
});
