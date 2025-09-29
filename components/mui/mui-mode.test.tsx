import MuiMode from './mui-mode';
import { render, screen } from '@/tests/utils';

describe('MuiMode component', () => {
  test('renders text correctly', () => {
    render(<MuiMode />);

    const textElement = screen.getByRole('heading');
    expect(textElement).toHaveTextContent('dark mode');
  });
});
