import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from "react-router-dom";

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
  document.getElementById('root')
);
