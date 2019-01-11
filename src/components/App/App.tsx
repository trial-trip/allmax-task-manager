import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { EditorContainer } from '../../containers/EditorContainer';
import { VisibleTaskList } from '../../containers/VisibleTaskList';
import './App.css';

export const App = () => (
  <div className="app">
    <h1 className="title">Tasks</h1>

    <Switch>
      <Route path="/add" component={EditorContainer} />
      <Route exact path="/edit" component={EditorContainer} />
      <Route path="/edit/:id" component={EditorContainer} />
      <Route exact path="/" component={VisibleTaskList} />
      <Route component={VisibleTaskList} />
    </Switch>

    <div className="credits">
      <span className="app-name">Allmax Task Manager</span>
      <span className="author">by Vladimir Logachev</span>
    </div>
  </div>
);
