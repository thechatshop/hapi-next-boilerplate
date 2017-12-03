import { shallow } from 'enzyme';
import Screen from './screen';

describe('Screen component', () => {
	test('renders okay', () => {
		expect(shallow(<Screen />));
	});
	test('accepts children', () => {
		const Complexcomponent = () => <Screen>Point</Screen>;

		expect(shallow(<Complexcomponent />).contains('Point')).toBe(true);
	});
});
