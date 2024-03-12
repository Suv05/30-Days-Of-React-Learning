import styles from "../App.module.css";

function TaskRender({ task, dueDate }) {
  return (
    <div className="row">
      <div className="col col-6">{task}</div>
      <div className="col col-4">{dueDate}</div>
      <div className="col col-2">
        <button type="button" className="btn-danger btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskRender;
