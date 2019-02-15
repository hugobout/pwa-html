import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ButtonMenu extends Component {
    render() {
        return(
            <Link to={this.props.buttonLink}><button>{this.props.buttonName}</button></Link>
        );
    }
}

export default ButtonMenu;