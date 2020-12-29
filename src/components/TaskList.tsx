import React from 'react';
import {TaskInterface} from '../interface/Task.interface'
import {Task} from './Task';


export interface Taskprops{
    loading?:boolean
    tasks:TaskInterface[]
    onPinTask?:(id:string)=>void
    onArchiveTask?:(id:string)=>void
    onUnPinTask?:(id:string)=>void
}   

export const TaskList:React.FC<Taskprops>=({ loading, tasks, onPinTask, onArchiveTask,onUnPinTask })=> {
  const events = {
    onPinTask,
    onArchiveTask,
    onUnPinTask
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
    <div className='max-w-xl mx-auto my-6 bg-gray-500 p-3 rounded-md'>
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

// export default connect(
// ({tasks}:any)=>({
//   tasks:tasks.filter((t:any)=>t.state==='TASK_INBOX' || t.state === 'TASK_PINNED')
// }),
// dispatch=>({
//   onArchiveTask:(id:any)=>dispatch(archiveTask(id)),
//   onPinTask:(id:any)=>dispatch(pinTask(id))

// })
// )(TaskList);