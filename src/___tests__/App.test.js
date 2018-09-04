import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer';
import * as TestUtils from 'react-dom/test-utils';


// smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("The App", () => {
  xit("should initialize the app correctly", () => {
    const myApp = new App();
    expect(myApp).toBeDefined();
    expect(myApp.state).toBeDefined();
    expect(myApp.state.tasks.length).toEqual(3);
  });

  it("can add a new task", () => {
    // render the app
    const myApp = TestUtils.renderIntoDocument(<App />);
    // create a new task
    let toAdd = { ...myApp.state };
    toAdd.text = "adding a new task - test";
    myApp.setState({ toAdd });
    // add the task
    myApp.addTask();
    expect(myApp.state.tasks.length).toEqual(4);
  });
});

// snapshot the app
describe("App Component", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});



