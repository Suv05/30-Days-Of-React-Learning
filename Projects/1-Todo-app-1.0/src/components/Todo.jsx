function Todo() {
  return (
    <div className="row kg-row">
      <div className="col col-6">
        <input type="text" placeholder="Enter your task" />
      </div>
      <div className="col col-4">
        <input type="date" name="date" id="" />
      </div>
      <div className="col col-2">
        <button type="button" className="btn-primary btn">
          Add
        </button>
      </div>
    </div>
  );
}
export default Todo;