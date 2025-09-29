import { render, screen } from '@testing-library/react';
import Hello from '@/components/hello/hello';

describe('Hello component', () => {
  fit('renders correctly', () => {
    render(<Hello />);

    const textElement = screen.getByText(/hi/i);
    expect(textElement).toBeInTheDocument();
  });

  // xdescribe("Hello component nested", () => {
  //   it("renders with a name", () => {
  //     render(<Hello name="Amalya" />);

  //     const textElement = screen.getByText("Hi Amalya");
  //     expect(textElement).toBeInTheDocument();
  //   });
  // });
});

// fdescribe("Hello component 2", () => {
//   it("renders with a name", () => {
//     render(<Hello name="Amalya" />);

//     const textElement = screen.getByText("Hi Amalya");
//     expect(textElement).toBeInTheDocument();
//   });
// });
