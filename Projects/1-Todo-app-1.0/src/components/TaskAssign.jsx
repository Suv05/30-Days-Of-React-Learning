//importing the taskrender so that we use it here
import TaskRender from "./TaskRender";

function TaskAssign({ arr }) {
  return (
    <div className="item-container">
      {arr.map((x) => (
        <TaskRender task={x.task} dueDate={x.dueDate}></TaskRender>
      ))}
    </div>
  );
}
export default TaskAssign;
