import { render, screen } from '@testing-library/react';
import FarmPageComponent from '.';

test('Renders its content', () => {
  const { container } = render(<FarmPageComponent/>);
  const filters = screen.getByTestId('filters');
  // not recommended to do class selector but it's better than adding a new container just for testing imo?
  const map = container.querySelector('.map-container');
  expect(filters).toBeInTheDocument();
  expect(map).toBeInTheDocument();
});
