import React, { useState } from "react";

function ChildrenDemo(props) {
  console.log(props.children);
  console.log(React.Children.map(props.children, c => [c, c]));
  return props.children;
}

export default function App() {
  return (
    <ChildrenDemo>
      <span>123</span>
      <span>2</span>
    </ChildrenDemo>
  )
}