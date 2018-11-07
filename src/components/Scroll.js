import React from 'react';

const Scroll = (props) => {
  console.log(props.items);
  return props.items > 4 ? (
    <div style={{ overflowY: "scroll", border: "1px dotted #eee", maxHeight: "300px", padding: "10px", backgroundColor: "#f6f6f6" }}>
      {props.children}
    </div>
  ) : (<div>{props.children}</div>);
};
export default Scroll;