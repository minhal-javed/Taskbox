import React from 'react'
import { TaskInterface } from '../interface/Task.interface';


interface props {
    task: TaskInterface
    onArchiveTask?: (id:string)=>any
    onPinTask?: (id:string)=>void
}

export const Task: React.FC<props> = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
    return (
        <div className={`list-item${state}`}>
            <label>
                <input type='checkbox' defaultChecked={state === 'TASK_ARCHIVED'} name='checked' disabled={true} />
                {/* <span className='checkbox-custom' onClick={() => onArchiveTask(id)} /> */}

            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title" />
            </div>


            <div className="actions" onClick={event => event.stopPropagation()}>
                {/* {state !== 'TASK_ARCHIVED' && (
                    <a onClick={()=>onPinTask(id)}>
                        <span className={`icon-star`} />
                    </a>
                )} */}
            </div>
        </div>

    )
}