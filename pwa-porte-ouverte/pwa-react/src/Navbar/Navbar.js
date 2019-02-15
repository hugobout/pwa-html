import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <div>
                <Link to="/"><h1>Normandie Web School</h1></Link>
            </div>
        );
    }
}

export default Navbar;