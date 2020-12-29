import React from 'react';

// import { connect } from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';
import { TaskInterface } from '../interface/Task.interface';
import { pinTask,unPinTask,archive } from '../lib/redux';

import {TaskList} from './TaskList';


export interface PureInboxProps{
    error?:string | null
}

export const PureInboxScreen:React.FC<PureInboxProps>=({ error }) =>{
const task=useSelector((state)=>state);
const dispatch =useDispatch()

const onPinTask=(id:string)=>{
  dispatch(pinTask({id:id}))
}
const onArchiveTask=(id:string)=>{
  dispatch(archive({id:id}))
}
const onUnPinTask=(id:string)=>{
  dispatch(unPinTask({id:id}))
}
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
    <div >
      <nav>
        <h1 className='max-w-full text-6xl p-8 '>
          Taskbox App
        </h1>
      <TaskList tasks={task as TaskInterface[]} onPinTask={onPinTask}  onArchiveTask={onArchiveTask}  onUnPinTask={onUnPinTask}/>

      </nav>
    </div>
  );
}

// export default connect(({ error }:PureInboxProps) => ({ error }))(PureInboxScreen);