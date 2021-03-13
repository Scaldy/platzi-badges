import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './glouobal.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);

/* const jsx = <h1>Hello, Platzi Badges Marcelito!</h1>

const container = document.getElementById('app');
ReactDOM.render(jsx, container); */

// const element = React.createElement(
//     'a',
//     {
//         href: 'https://google.com'
//     },
//     'Ir a Google'
// );

// const container = document.getElementById('app');
// ReactDOM.render(element, container);