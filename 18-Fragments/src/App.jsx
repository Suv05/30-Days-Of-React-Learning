import React from 'react';

function App(){
  return(
    <React.Fragment>
      {/* Here we use react fragment to return more than one html element without using a extra div  */}
      <h1>Healthy Food</h1>
      <ul className="list-group">
        <li className="list-group-item">apple</li>
        <li className="list-group-item">orange</li>
        <li className="list-group-item">grapes</li>
        <li className="list-group-item">pinaple</li>
        <li className="list-group-item">banana</li>
      </ul>
      {/* without importing react we can use <>....</> */}
    </React.Fragment>

  )
}
export default App;