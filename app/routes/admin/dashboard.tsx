import { Header } from 'components';

const Dashboard = () => {
  // fake user
  const user = {
    name: 'abc',
  };

  return (
    <main className='dashboard wrapper'>
      <Header
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description='Track activity, trends and popular destinations in real time'
      />
      Dashboard Page Contents
    </main>
  );
};

export default Dashboard;
