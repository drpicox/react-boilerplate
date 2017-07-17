import React from 'react';
import ReactDOM from 'react-dom';

function renderClock(n) {
  return (
    <div>
      <h1>Hello, React functional Clock!</h1>
      Hola <span>{n}</span>
    </div>
  );
}

function main() {
  let n = 0;
  setInterval(function() {
    n += 1;
    ReactDOM.render(
      renderClock(n),
      document.getElementById('root')
    );
  }, 1000);
}

export default main;