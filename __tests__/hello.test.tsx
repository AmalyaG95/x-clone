import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hello from '@/components/hello';

test('renders and clicks', async () => {
  render(<Hello />);
  const btn = screen.getByRole('button', { name: /say hi/i });
  await userEvent.click(btn);
  expect(btn).toBeInTheDocument();
});