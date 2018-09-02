import React, { Component } from 'react';
import TaskItem from './taskItem'

class TaskItems extends Component {
    render() {
        const { tasks, onTaskCompleted } = this.props;
        const listHeader = tasks.length > 0 ? "Up Coming" : null;
        return (
            <div className="list-group">
                <h5 className="undone-list-header">{listHeader}</h5>
                {tasks.map(task => <TaskItem key={task.id} task={task} onTaskCompleted={onTaskCompleted} />)}
            </div>
        );
    }
}

export default TaskItems;