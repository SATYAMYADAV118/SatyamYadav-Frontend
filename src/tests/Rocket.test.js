import React from 'react';
import { render } from '@testing-library/react';
import Rockets from '../pages/Rockets';

test('renders without crashing', () => {
  render(<Rockets />);
});

test('displays loading state when data is not available', () => {
  const { getByText } = render(<Rockets />);
  const loadingText = getByText("The spinny thingy means it's loading");
  expect(loadingText).toBeInTheDocument();
});
