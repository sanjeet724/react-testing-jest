import React, { Component } from 'react';

class DoneItem extends Component {

    render() {
        const { task } = this.props;
        return (
            <div >
                <li className="list-group-item done-list-item list-group-item-success">{task.text}
                </li>
            </div >
        );
    }
}

export default DoneItem;