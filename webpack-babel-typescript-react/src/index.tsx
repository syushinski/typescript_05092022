import React from 'react';
import { render } from 'react-dom';

import { MyForm } from './MyForm';

const App = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <MyForm />
        </div>
    );
    // return React.createElement('h1', null, 'Hello, World!');
};

class HelloWorld extends HTMLElement {

    connectedCallback() {

        
        // render(<App />, this);
        render(React.createElement(App), this);
    }

}

window.customElements.define('hello-world', HelloWorld);

