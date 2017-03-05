import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import EventDetails from '../components/EventDetails/index';
import NewEvent from '../components/NewEvent';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  EventDetails,
  NewEvent
});
