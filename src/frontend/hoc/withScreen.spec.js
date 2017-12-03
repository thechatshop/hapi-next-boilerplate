import { shallow, mount } from 'enzyme';
import withScreen from './withScreen';

const SimpleComponent = () => <p>Lorem ipsum</p>;
const Wrapper = withScreen(() => <SimpleComponent />);

describe('withScreen component', () => {
	test('renders okay', () => {
		expect(shallow(<Wrapper />));
	});

	test('contains simple component', () => {
		expect(mount(<Wrapper />).contains('Lorem ipsum')).toBe(true);
	});
});
