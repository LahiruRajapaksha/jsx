import React from 'react';
import ReactDOM from 'react-dom';

// Create react component
const App = () => {
  return (
    <div className="ui container">
      <div className ="comment">
        <a href="/" className="avatar">
          <img alt="avatar"/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00 PM</span>
          </div>
          <div className="text">
            Nice Blog post
          </div>

        </div>
      </div>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
