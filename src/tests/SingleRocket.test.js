import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import SingleRocket from '../pages/SingleRocket';

describe('SingleRocket Component', () => {
  test('displays loading state', () => {
    render(<SingleRocket />, { wrapper: MemoryRouter });
    const loadingText = screen.getByText("The spinny thingy means it's loading");
    expect(loadingText).toBeInTheDocument();
  });

  // You can add more test cases here...

});
