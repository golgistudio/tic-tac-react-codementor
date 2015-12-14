import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToeApp from './components/ticTacToeApp';

window.onload = () => {
    ReactDOM.render(
        <TicTacToeApp />,
        document.querySelector('#container')
    );
};