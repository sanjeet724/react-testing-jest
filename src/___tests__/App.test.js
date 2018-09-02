import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer';

// smoke test
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

// snapshot the app
describe("App Component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});



