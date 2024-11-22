import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

test('renders Vite + React header', () => {
    render(<App />);
    const headerElement = screen.getByText(/vite \+ react/i);
    expect(headerElement).toBeInTheDocument();
});

