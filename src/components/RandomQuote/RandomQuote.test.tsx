import { render, screen } from '@testing-library/react';
import RandomQuote from '.';

describe('RandomQuote', () => {
  it('should render a loading message when data is being fetched', () => {
    render(<RandomQuote />);
    expect(screen.getByText('Random Quote is loading...')).toBeInTheDocument();
  });

  it('should render a refresh button', () => {
    render(<RandomQuote />);
    expect(
      screen.getByRole('button', { name: 'Click to fetch a new random quote' })
    ).toBeInTheDocument();
  });
});
