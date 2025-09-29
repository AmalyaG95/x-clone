import { render, screen } from '@testing-library/react';
import Hello from '@/components/hello/hello';

describe('Hello component', () => {
  test.only('renders correctly', () => {
    render(<Hello />);

    const textElement = screen.getByText(/hi/i);
    expect(textElement).toBeInTheDocument();
  });

  // describe.skip("Hello component nested", () => {
  //   test("renders with a name", () => {
  //     render(<Hello name="Amalya" />);

  //     const textElement = screen.getByText("Hi Amalya");
  //     expect(textElement).toBeInTheDocument();
  //   });
  // });
});

// describe.only("Hello component 2", () => {
//   test("renders with a name", () => {
//     render(<Hello name="Amalya" />);

//     const textElement = screen.getByText("Hi Amalya");
//     expect(textElement).toBeInTheDocument();
//   });
// });
