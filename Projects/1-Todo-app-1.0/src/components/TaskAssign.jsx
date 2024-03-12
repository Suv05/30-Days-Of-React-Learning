//importing the taskrender so that we use it here
import TaskRender from "./TaskRender";
import styles from "../App.module.css";

function TaskAssign({ arr, onDeleteClick }) {
  return (
    <div className={styles.itemContainer}>
      {arr.map((x) => (
        <TaskRender
          key={x.task}
          task={x.task}
          dueDate={x.dueDate}
          onDeleteClick={onDeleteClick}
        ></TaskRender>
      ))}
    </div>
  );
}
export default TaskAssign;
