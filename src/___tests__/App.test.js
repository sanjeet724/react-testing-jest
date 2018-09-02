import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("attributes", () => {
  it("should initialize the app correctly", () => {
    const app = new App();
    expect(app.state).toBeDefined();
    expect(app.state.tasks.length).toEqual(3);
  });
});



