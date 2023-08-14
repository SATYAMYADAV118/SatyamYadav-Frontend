import React from 'react';
import { render } from '@testing-library/react';

import LoadingState from '../components/LoadingState';

describe('LoadingState Component', () => {
  test('renders without crashing', () => {
    render(<LoadingState />);
  });

  test('displays the loading text', () => {
    const { getByText } = render(<LoadingState />);
    const loadingText = getByText("The spinny thingy means it's loading");
    expect(loadingText).toBeInTheDocument();
  });

  // Add more tests here if needed
});
