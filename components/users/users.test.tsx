import { render, screen } from '@testing-library/react';
import Users from './users';
// import { server } from "@/tests/mocks/server";
// import { http, HttpResponse } from "msw";

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);
    const users = screen.getByText('Users');
    expect(users).toBeInTheDocument();
  });

  //   test("renders a list of users", async () => {
  //     render(<Users />);

  //     const users = await screen.findAllByRole("listitem");
  //     expect(users).toHaveLength(3);
  //   });
  // test("renders error", async () => {
  //   server.use(
  //     http.get("https://jsonplaceholder.typicode.com/users", () => {
  //       return HttpResponse.json({
  //         error: "Error fetching users",
  //       });
  //     })
  //   );

  //   render(<Users />);
  //   const error = await screen.findByText("Error fetching users");
  //   expect(error).toBeInTheDocument();
  // });
});
