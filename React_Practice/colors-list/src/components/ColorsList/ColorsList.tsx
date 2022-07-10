import './ColorsList.scss';

import React from 'react';
import classNames from 'classnames';
import { Color } from '../../types/Color';

type Props = {
  colors: Color[];
};

export const ColorsList: React.FC<Props> = ({ colors }) => {
  const selectorColorId = 3;

  return (
    <div className="ColorsList">
      <h3 className="ColorsList__title">
        Available colors
      </h3>

      <ul className="ColorsList__content">
        {colors.map(color => (
          <li
            key={color.id}
            style={{ color: color.hex }}
            className={classNames(
              'ColorsList__item',
              {
                active: color.id === selectorColorId,
              },
            )}
          >
            {color.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
