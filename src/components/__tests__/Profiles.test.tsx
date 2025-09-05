import { renderWithProviders, screen } from '../../tests/utils';
import Profiles from '../Profiles';
import { profiles } from '../../data/profiles';

describe('Profiles', () => {
  it('renders the connect with me heading', () => {
    renderWithProviders(<Profiles />);
    expect(screen.getByText('My Digital Presence')).toBeInTheDocument();
  });

  it('renders all profile links', () => {
    renderWithProviders(<Profiles />);

    // Check that each profile name is rendered
    profiles.forEach(profile => {
      expect(screen.getByText(profile.name)).toBeInTheDocument();
    });
  });

  it('groups profiles by category', () => {
    renderWithProviders(<Profiles />);

    // Get all category headings
    const categoryHeadings = screen.getAllByRole('heading', { level: 3 });

    // Should have 7 categories
    expect(categoryHeadings).toHaveLength(7);
    expect(categoryHeadings[0]).toHaveTextContent('Development');
    expect(categoryHeadings[1]).toHaveTextContent('Data Science');
    expect(categoryHeadings[2]).toHaveTextContent('Design');
    expect(categoryHeadings[3]).toHaveTextContent('Writing');
    expect(categoryHeadings[4]).toHaveTextContent('Professional');
    expect(categoryHeadings[5]).toHaveTextContent('Portfolio');
    expect(categoryHeadings[6]).toHaveTextContent('Social Media');
  });

  it('has correct links with proper attributes', () => {
    renderWithProviders(<Profiles />);

    // Check that each profile link has the correct attributes
    profiles.forEach(profile => {
      const link = screen.getByText(profile.name).closest('a');
      expect(link).toHaveAttribute('href', profile.url);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
