import React from 'react';
import ReactDom from 'react-dom';

const container = document.querySelector('#app');

const content = <h2>Hello React</h2>;

ReactDom.render(content, container)