import React,{useState} from 'react'
import { TaskInterface } from '../interface/Task.interface';
// import {archiveTask,pinTask} from '../lib/redux';

export interface props {
    task: TaskInterface
    onArchiveTask?: (id:string)=>void
    onPinTask?: (id:string)=>void;
    onUnPinTask?: (id: string) => void;
}

export const Task: React.FC<props> = ({ task: { id, title, state } ,onArchiveTask,
    onPinTask,
    onUnPinTask,}) => {
    const [isChecked, setIsChecked] = useState<boolean>();
    return (
        <div
        className={`list-item ${state} py-2 my-1 px-2 flex justify-center  ${
          state === "TASK_ARCHIVED" ? "bg-gray-200" : "bg-white"
        }`}
      >
        {state === "TASK_ARCHIVED" && (
          <div
           
            style={{ height: "13px" }}
          ></div>
        )}
        <div>
          <label className="checkbox">
            <input
              type="checkbox"
              defaultChecked={state === "TASK_PINNED"}
              disabled={state === "TASK_ARCHIVED" ? true : false}
              name="checked"
              className="cursor-pointer"
              onClick={(e) => {
                state !== "TASK_ARCHIVED" && !isChecked
                  ? !!onPinTask && onPinTask(id)
                  : !!onUnPinTask && onUnPinTask(id);
                setIsChecked(!isChecked);
              }}
            />
          </label>
          <div className="title inline">
            <h1 className="inline px-3">{title}</h1>
          </div>
        </div>
  
        {/* <div
          className="actions"
          onClick={(event) => event.stopPropagation()}
        ></div> */}
        {state !== "TASK_ARCHIVED" ? (
          <span
            className="text-blue-800 hover:text-blue-500 cursor-pointer relative"
            onClick={() =>
              state !== "TASK_ARCHIVED" && !!onArchiveTask && onArchiveTask(id)
            }
          >
            archive
          </span>
        ) : (
          "archived"
        )}
        {/* {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => !!onPinTask && onPinTask(id)}>
            <span>pin</span>
          </a>
        )} */}
      </div>
    )
}