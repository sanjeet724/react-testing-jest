import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import TaskItem from '../components/taskItem';
import renderer from 'react-test-renderer';
const State = require('../State');

describe("TaskItem", () => {
    fit("should handle onClick event", () => {
        const task = {
            id: 1,
            text: "Testing the taskItem",
            status: "NOK"
        };

        const onTaskCompleted = function (task) {
            task.status = "OK"
        };

        const taskItem = TestUtils.renderIntoDocument(
            <TaskItem task={task} onTaskCompleted={onTaskCompleted} />
        );

        // verify if the  DOM node was created
        const taskItemNode = ReactDOM.findDOMNode(taskItem);
        expect(taskItemNode).toBeDefined();

        // check the list item
        let li_item = TestUtils.findRenderedDOMComponentWithTag(taskItem, 'li');
        expect(li_item).toBeDefined();
        expect(li_item.classList.length).toEqual(3);

        // check the input item
        let input_item = TestUtils.findRenderedDOMComponentWithTag(taskItem, 'input');
        expect(input_item).toBeDefined();
        expect(input_item.checked).toBeFalsy();

        // Simulate a click on the checkbox
        TestUtils.Simulate.click(input_item);

        //verify that it changes the status
        expect(task.status).toEqual('OK');
    });
});

// snapshot the component
describe("TaskItem Component", () => {
    it("matches the snapshot", () => {
        const onTaskCompleted = () => { };
        const tasks = State.getInitialState().tasks;
        tasks.forEach(task => {
            const tree = renderer.create(
                <TaskItem task={task}
                    onTaskCompleted={onTaskCompleted} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
});
