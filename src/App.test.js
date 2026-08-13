// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MeshGate title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MeshGate/i);
    expect(titleElement).toBeInTheDocument();
});
