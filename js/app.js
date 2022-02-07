/* global React, ReactDOM */

function Avatar() {
    const title = 'Hola mundo';
    return (
        <div>
            <p>{`Os saludo; ${title}`}</p>
        </div>
    );
}
ReactDOM.render(Avatar(), document.querySelector('.avatar'));
