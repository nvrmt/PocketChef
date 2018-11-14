import Reactotron from 'reactotron-react-native';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';

Reactotron
	.configure({ name: 'NeverL8' })
	.useReactNative()
	.use(reduxPlugin())
	.connect();

Reactotron.clear();

console.tron = Reactotron;