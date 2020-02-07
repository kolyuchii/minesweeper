import React from "react";
import classnames from "classnames";

export default function(props) {
  const grid = props.grid.map((row, rowIndex) => {
    const cells = row.map((cell, cellIndex) => {
      const cellClassNames = classnames({
        cell: true,
        "is-hidden": cell.isHidden,
        "is-blown-up": cell.isBlownUp
      });
      return (
        <div
          className={cellClassNames}
          onClick={props.onClick.bind(this, rowIndex, cellIndex)}
        >
          {cell.value}
        </div>
      );
    });
    return <div className="row">{cells}</div>;
  });
  return <div className="wrapper">{grid}</div>;
}
