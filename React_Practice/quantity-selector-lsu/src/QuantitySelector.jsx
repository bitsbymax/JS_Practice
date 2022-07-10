import React from 'react';

export const QuantitySelector = ({
  title,
  quantity,
  onRemove,
  onAdd,
}) => {
  return (
    <div className="QuantitySelector">
      {title}: &nbsp;
      <button onClick={onRemove}>-</button>
      <b> {quantity} </b>
      <button onClick={onAdd}>+</button>
    </div>
  );
};
