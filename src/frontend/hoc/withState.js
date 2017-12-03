import { observer } from 'mobx-react';
import { compose, withProps } from 'recompose';
import state from '../state';

const enhancer = compose(observer, withProps({ state }));

export default enhancer;
