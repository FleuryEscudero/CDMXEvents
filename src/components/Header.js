import React from 'react';

const Header = (props) => {
    return ( 
        <nav>
            <header className="uk-margin" uk-margin="true">
                <h1 className="uk-text-center">{props.titulo}</h1>
            </header>
        </nav>
     );
}
 
export default Header;