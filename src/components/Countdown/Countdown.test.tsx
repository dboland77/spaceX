import React from 'react';
import { render, screen } from '@testing-library/react';
import Countdown from './Countdown';

test('renders learn react link', () => {
    render(<Countdown />);
    const linkElement = screen.getByText(/Hello from Countdown/i);
    expect(linkElement).toBeInTheDocument();
});
