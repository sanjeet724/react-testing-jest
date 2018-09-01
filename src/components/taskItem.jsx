import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        const { task, onTaskCompleted } = this.props;
        return (
            <div >
                <li className="list-group-item undone-list-item list-group-item-primary">
                    {task.text}
                    <input type="checkbox" className="m-2 undone-list-checkbox" onClick={() => onTaskCompleted(task)} />
                </li>
            </div >
        );
    }
}

export default TaskItem;