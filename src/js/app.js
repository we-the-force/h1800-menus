import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.styl';

// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component

  name: 'Palmeira by 1800', // App name
  theme: 'auto', // Automatic theme detection
  

  view: {
    // pushState: true,
    // pushStateSeparator: '',
    // pushStateRoot: 'https://hacienda1800.com'
    // pushStateRoot: 'https://hacienda1800.com'
  },
  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: './service-worker.js',
  },
});