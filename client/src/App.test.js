import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders top level components', () => {
  render(<App />);
  const navbar = screen.getByTestId('navbar');
  const content = screen.getByTestId('content');
  expect(navbar).toBeInTheDocument();
  expect(content).toBeInTheDocument();
});
