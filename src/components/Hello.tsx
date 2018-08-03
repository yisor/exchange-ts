import * as React from 'react';
import '../App.css';

interface Props {
  name: string;
  count?: number;
}

export default ({ name, count = 1 }: Props) => (
  <div className="App-title">
    Welcome {name}: {count}
  </div>
);