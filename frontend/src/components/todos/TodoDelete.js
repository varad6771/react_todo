// components/todos/TodoDelete.js

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTodo, getTodo } from '../../actions/todos';
import history from '../../history';
import Modal from '../layout/Modal';

class TodoDelete extends Component {
    componentDidMount() {
        this.props.getTodo(this.props.match.params.id);
    }

    renderContent() {
        if (!this.props.todo) {
            return 'Are you sure you want to Mark this task as Done ?';
        }
        return `Are you sure you want to Mark this task as Done : ${this.props.todo.task}`;
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <Fragment>
                <button
                    onClick={() => this.props.deleteTodo(id)}
                    className='ui negative button'
                > Done </button>
                <Link to='/' className='ui button'> Cancel </Link>
            </Fragment>
        );
    }

    render() {
        return (
            <Modal
                title='Remove Todo'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    todo: state.todos[ownProps.match.params.id]
});

export default connect(
    mapStateToProps,
    { getTodo, deleteTodo }
)(TodoDelete);