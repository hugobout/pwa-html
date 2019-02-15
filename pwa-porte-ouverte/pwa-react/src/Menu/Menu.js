import React, {Component} from 'react';

import ButtonMenu from './ButtonMenu';

class Menu extends Component {
    render() {
        return(
            <div>
                <ButtonMenu buttonName="Calendrier" buttonLink="/calendrier" />
                <ButtonMenu buttonName="Programme" buttonLink="/programme" />
                <a href="https://www.normandie-web-school.fr/"><button>Le site de l'école</button></a>
            </div>
        );
    }
}

export default Menu;