import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import { MenuProvider } from './context/MenuProvider';

function App() {
  return (
    <MenuProvider>
      <Layout>
        <Outlet />
      </Layout>
    </MenuProvider>
  );
}

export default App;
