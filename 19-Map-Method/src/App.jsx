function App() {
  let foodItem = ["apple", "orange", "grapes", "pinaple", "banana"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItem.map((x) => 
          <li key={x} className="list-group-item">
            {x}
          </li>
        )}
      </ul>
    </>
  );
}
export default App;
