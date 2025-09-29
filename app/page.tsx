import MuiMode from '@/components/mui/mui-mode';
import AppProviders from '@/providers/app-providers';

const Homepage = () => {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
};

export default Homepage;
