import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react and vite logos', () => {
  const { getByAltText } = render(<App />);
  const reactLogo = getByAltText('React logo');
  const viteLogo = getByAltText('Vite logo');
  expect(reactLogo).toBeInTheDocument();
  expect(viteLogo).toBeInTheDocument();
});
