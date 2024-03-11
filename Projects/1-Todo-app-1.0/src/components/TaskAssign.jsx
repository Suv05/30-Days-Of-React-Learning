//importing the taskrender so that we use it here
import TaskRender from "./TaskRender";
import styles from "../App.module.css";

function TaskAssign({ arr }) {
  return (
    <div className={styles.itemContainer}>
      {arr.map((x) => (
        <TaskRender task={x.task} dueDate={x.dueDate}></TaskRender>
      ))}
    </div>
  );
}
export default TaskAssign;
