import React from 'react';

import { connect } from 'react-redux';

import TaskList from './TaskList';


interface PureInboxProps{
    error:string | null
}

export const PureInboxScreen:React.FC<PureInboxProps>=({ error }) =>{
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}

export default connect(({ error }:PureInboxProps) => ({ error }))(PureInboxScreen);