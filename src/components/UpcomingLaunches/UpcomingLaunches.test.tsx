import React from 'react';
import { render, screen } from '@testing-library/react';
import UpcomingLaunches from './UpcomingLaunches';

test('renders learn react link', () => {
    render(<UpcomingLaunches />);
    const linkElement = screen.getByText(/Hello from Launches/i);
    expect(linkElement).toBeInTheDocument();
});
