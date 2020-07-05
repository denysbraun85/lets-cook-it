import React, {Component} from 'react';
import Menu from "../menu";
import OptionsMenu from "../options-menu";

import Background from './kitchen_bg.jpg';
import './app.sass';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: false
        };

        this.openMenu =  this.openMenu.bind(this);

    }

    openMenu = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };

    render() {
        const {isToggleOn} = this.state;
        return (
            <div className="app" style={{background: `url(${Background}) center no-repeat`}}>
                <Menu
                    toggleButton={isToggleOn}
                    onToggleMenu={this.openMenu}
                />
                <OptionsMenu/>
            </div>
        )
    }

};
