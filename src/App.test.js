import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react ngl app', () => {
  render(<App />);
  expect(screen.getByRole('app')).toBeTruthy();
});
