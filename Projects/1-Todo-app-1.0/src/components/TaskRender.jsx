function TaskRender(props) {
  return (
    <div className="row kg-row">
      <div className="col col-6">{props.task}</div>
      <div className="col col-4">{props.dueDate}</div>
      <div className="col col-2">
        <button type="button" className="btn-danger btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskRender;
