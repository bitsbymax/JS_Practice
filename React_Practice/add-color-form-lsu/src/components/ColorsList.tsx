import React from 'react';
import { Color } from '../App';

export type ColorsListProps = {
  colors: Color[];
  onRemove: (colorId: number) => void;
};

export const ColorsList: React.FC<ColorsListProps> = ({
  colors,
  onRemove,
}) => (
  <ul>
    {colors.map(color => (
      <li key={color.id} style={{ color: color.hex }}>
        {color.name}
        <button
          type="button"
          onClick={() => {
            onRemove(color.id)
          }}
        >
          x
        </button>
      </li>
    ))}
  </ul>
);
