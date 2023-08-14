import React from 'react';
import { render } from '@testing-library/react';
import Capsules from '../pages/Capsules'; // Update the path accordingly

test('renders without crashing', () => {
  render(<Capsules />);
});
