import { shallow, mount } from 'enzyme';
import withBluePrintCss from './withBlueprintCss';

const SimpleComponent = () => <p>Lorem ipsum</p>;
const Blueprint = withBluePrintCss(() => <SimpleComponent />);

describe('withBlueprintCss component', () => {
	test('renders okay', () => {
		expect(shallow(<Blueprint />));
	});

	test('contains simple component', () => {
		expect(mount(<Blueprint />).contains('Lorem ipsum')).toBe(true);
	});
});
