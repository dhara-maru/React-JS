import React from "react";
function Frag() {

  let items = [56,34,67,45,6,45,23,5,6]


  return (
    // REACT FRAGMENTS 
    <React.Fragment>   
        {/* or use just simple <> and </> */}

       
      <h5>My List Group</h5>
      <ul className="list-group">
        
        {/* // REACT MAP */}
        {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
      </ul>
      </React.Fragment>
  );
}
export default Frag;
