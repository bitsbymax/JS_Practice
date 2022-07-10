import './Theme.scss';

import React from 'react';
import { Color } from '../../types/Color';

type Props = {
  primaryColor: Color;
  secondaryColor: Color;
};

export const Theme: React.FC<Props> = ({
  primaryColor,
  secondaryColor,
}) => (
  <div className="Theme">
    <h3 className="Theme__title">Current theme</h3>

    <div className="Theme__content">
      {/* eslint jsx-a11y/label-has-associated-control: off */}
      <label>
        1st:&nbsp;
        <strong>{primaryColor.name}</strong>
        <input type="color" value={primaryColor.hex} />
      </label>

      <label>
        2st:&nbsp;
        <strong>{secondaryColor.name}</strong>
        <input type="color" value={secondaryColor.hex} />
      </label>
    </div>
  </div>
);
