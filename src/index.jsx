import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';

import App from "@pages/Home";

const container = document.querySelector('#app');


ReactDom.render(
    <div><App /></div>, container)
