import { render, screen, logRoles } from '@testing-library/react';
import Skills from './skills';

describe('Skills component', () => {
  const skills = ['s1', 's2', 's3'];
  test('renders correctly', () => {
    render(<Skills skills={skills} />);

    const skillsList = screen.getByRole('list');
    expect(skillsList).toBeInTheDocument();
  });

  test('renders list of skills', () => {
    render(<Skills skills={skills} />);

    const skillsListItem = screen.getAllByRole('listitem');
    expect(skillsListItem).toHaveLength(skills.length);
  });

  test('renders login button', () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole('button', {
      name: 'Login',
    });
    expect(loginButton).toBeInTheDocument();
  });

  describe('Start learning button', () => {
    test("isn't rendered", () => {
      render(<Skills skills={skills} />);

      const startLearningButton = screen.queryByRole('button', {
        name: 'Start learning',
      });
      expect(startLearningButton).not.toBeInTheDocument();
    });

    test('is eventually displayed', async () => {
      const view = render(<Skills skills={skills} />);

      logRoles(view.container);

      // screen.debug()
      const startLearningButton = await screen.findByRole(
        'button',
        {
          name: 'Start learning',
        },
        {
          timeout: 2000,
        },
      );
      // screen.debug()

      expect(startLearningButton).toBeInTheDocument();
    });
  });
});
