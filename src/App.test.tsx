import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Should render `Home` page with a single button', () => {
  render(<App />);

  const linkElement = screen.getByText(/Open Modal/i);

  expect(linkElement).toBeInTheDocument();
});
