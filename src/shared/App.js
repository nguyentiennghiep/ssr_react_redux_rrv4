import React from 'react';
import { connect } from "react-redux";
import { Route } from 'react-router-dom';
import List from "./List";
import { Link,withRouter } from 'react-router-dom';
import Home from './Home';
import * as actions from "../shared/Actions/index";


class App extends React.Component {
    static fetchDa(store) {
        return store.dispatch(actions.fetchData());
    }
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        console.log("abc", this.props.todos)
        return (
            <div>
                Hello
                <ul>
                    <li><Link to="/list">List</Link></li>
                    <li><Link to="/home"> Home</Link></li>
                </ul>
                <Route component={List} path="/list" />
                <Route component={Home} path="/home" />
                {/* {
                    this.props.todos.map((todo, index) => {
                        return <p key={index}>{todo.name}</p>
                    })
                } */}
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchData: () => { dispatch(actions.fetchData) }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const Appdata = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default Appdata;