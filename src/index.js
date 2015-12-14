import React from 'react';
import ReactDOM from 'react-dom';

import store from './store.js';
import Game from './components/game';

window.onload = () => {
    const render = () => {
        const state = store.getState();
        const currentGame = state[0];

        ReactDOM.render(
            <Game history={currentGame} store={store}/>,
            document.getElementById('ticTacToeContainer')
        );
    };

    store.subscribe(render);
    render();
};

