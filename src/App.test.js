// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DecentralLedger title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DecentralLedger/i);
    expect(titleElement).toBeInTheDocument();
});
