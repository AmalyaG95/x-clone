import { logRoles, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './counter';

describe('Counter component', () => {
  test('renders correctly', () => {
    render(<Counter />);

    const countNumber = screen.getByRole('heading');
    expect(countNumber).toBeInTheDocument();

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test('renders a counter of 0', () => {
    render(<Counter />);

    const countNumber = screen.getByRole('heading');
    expect(countNumber).toHaveTextContent('0');
  });

  test('renders a counter of 1 after clicking the increment button', async () => {
    user.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });

    await user.click(incrementButton);

    const countNumber = screen.getByRole('heading');
    expect(countNumber).toHaveTextContent('1');
  });

  test('renders a counter of 2 after clicking the increment button twice', async () => {
    user.setup();

    render(<Counter />);

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });

    await user.click(incrementButton);
    await user.click(incrementButton);

    const countNumber = screen.getByRole('heading');
    expect(countNumber).toHaveTextContent('2');
  });

  test('renders a counter of 10 after clicking the set button', async () => {
    user.setup();
    render(<Counter />);

    const counterInput = screen.getByRole('spinbutton');

    await user.type(counterInput, '10');
    expect(counterInput).toHaveValue(10);

    const setButton = screen.getByRole('button', {
      name: 'Set',
    });

    await user.click(setButton);

    const countNumber = screen.getByRole('heading');
    expect(countNumber).toHaveTextContent('10');
  });
});
