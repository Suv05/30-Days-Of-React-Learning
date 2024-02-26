function App() {
  return (
    <center className="todo-container">
      <h2>To-Do</h2>
      {/* starting of first line */}
      <div className="row">
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
      {/* second line of code */}
      <div className="row">
        <div className="col col-6">
         sleep
        </div>
        <div className="col col-4">
          4/10/2023
        </div>
        <div className="col col-2">
          <button type="button" className="btn-danger btn">
            Delete
          </button>
        </div>
      </div>
      {/* third line of code */}
      <div className="row">
        <div className="col col-6">
          Excersize
        </div>
        <div className="col col-4">
         5/12/24
        </div>
        <div className="col col-2">
          <button type="button" className="btn-danger btn">
            Delete
          </button>
        </div>
      </div>
    </center>
  );
}

export default App;
