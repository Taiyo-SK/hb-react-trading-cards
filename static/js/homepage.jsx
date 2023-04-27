'use strict';

function Homepage() {
  return (
  <React.Fragment>
    <h2>Welcome to Hackbright TCG.</h2>
    <a href="http://localhost:5000/cards">Card Collection</a>
    <img src="/static/img/balloonicorn.jpg" />
  </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
