import React from "react";

const Stat = props => (
  <div key={props.name} className="statFrame">
    <div className="statGradient">
      <p className="statLabel">
        {props.name}: {props.value} {props.displayMax && `/ ${props.max}`}
      </p>
    </div>
  </div>
);

export default Stat;