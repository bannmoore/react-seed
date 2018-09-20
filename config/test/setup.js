/*
 * Configure Jest to use Enzyme for React testing.
 * This is used by the `setupTestFrameworkScriptFile` property in Jest configuration.
 * Docs: https://airbnb.io/enzyme/docs/installation/
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
