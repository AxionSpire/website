import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

test('renders the join game component', () => {
  render(<Home />);
  const joinGame = screen.getByRole('button', {
    name: /join game/i
  })
  expect(joinGame).toBeInTheDocument();
});