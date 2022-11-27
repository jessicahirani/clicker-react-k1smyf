import React, { Component } from 'react';
import Header from './header';
import Clicker from './clicker';
import Footer from './footer';

export default class ClickerApp extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Counter'
        };
    }

    render() {
        return (
            <div>
                <Clicker />
            </div>
        );
    }
}