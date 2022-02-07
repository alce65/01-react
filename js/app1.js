/* global React, ReactDOM */

function app() {
    function Avatar() {
        return React.createElement(
            'div',
            {},
            React.createElement('p', {}, 'Hola mundo')
        );
    }
    ReactDOM.render(Avatar(), document.querySelector('.avatar'));
}

document.addEventListener('DOMContentLoaded', app);
