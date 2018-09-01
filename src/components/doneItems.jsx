import React, { Component } from 'react';
import DoneItem from './doneItem'


class DoneItems extends Component {
    render() {
        const { tasks } = this.props;
        const listHeader = tasks.length > 0 ? "Done" : null;
        return (
            <div className="list-group">
                <h5 className="done-list-header">{listHeader}</h5>
                {tasks.map(task => <DoneItem key={task.id} task={task} />)}
            </div>
        );
    }
}

export default DoneItems;