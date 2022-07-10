import './App.scss';

import React from 'react';
import { ColorsList } from './components/ColorsList';
import { Theme } from './components/Theme';
import { Color } from './types/Color';

const availableColors: Color[] = [
  { id: 1, name: 'red', hex: '#FF0000' },
  { id: 2, name: 'green', hex: '#00FF00' },
  { id: 3, name: 'blue', hex: '#0000FF' },
];

export const App: React.FC = () => (
  <div className="App">
    <Theme
      primaryColor={availableColors[0]}
      secondaryColor={availableColors[1]}
    />
    <ColorsList colors={availableColors} />
  </div>
);
