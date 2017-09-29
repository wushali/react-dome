import React,{Component} from 'react';
import ReactDom from 'react-dom';
import RouteConfig from './RouteConfig';

import './assets/css/basic.css';
import './assets/css/swiper.css';








ReactDom.render(
    <RouteConfig />,
    document.querySelector("#app")
);