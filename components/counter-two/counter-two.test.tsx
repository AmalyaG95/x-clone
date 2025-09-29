import { render, screen } from '@testing-library/react';
import CounterTwo from './counter-two';
import user from '@testing-library/user-event';

describe('CounterTwo', () => {
  test('should render correctly', () => {
    render(<CounterTwo count={0} />);

    const textElement = screen.getByText('Counter Two');
    expect(textElement).toBeInTheDocument();
  });

  test('handlers are called', async () => {
    user.setup();
    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />,
    );

    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(handleIncrement).toHaveBeenCalledTimes(1);
    expect(handleDecrement).toHaveBeenCalledTimes(1);
  });
});
