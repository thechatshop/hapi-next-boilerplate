import { nest } from 'recompose';
import Screen from '../components/screen';

const withScreen = component => nest(Screen, component);

export default withScreen;
