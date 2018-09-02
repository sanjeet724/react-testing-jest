import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import TaskItem from '../components/taskItem';
import renderer from 'react-test-renderer';

it('TaskItem Tests', () => {
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

    // Simulate a click and verify that it changes the status
    TestUtils.Simulate.click(
        TestUtils.findRenderedDOMComponentWithTag(taskItem, 'input')
    );
    expect(task.status).toEqual('OK');
});
