import Nav from './components/Nav';
import Banner from './components/Banner';
import Fotter from './components/Fotter';
import DevStack from './components/devstack/DevStack';
import type { MydevStack } from './dev types/devStackType';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const devfetch = async (): Promise<MydevStack[]> => {
  const res = await fetch(`${import.meta.env.BASE_URL}data.json`);
  const data = await res.json();
  return data;
};

function App() {
  const devPromise = devfetch();

  return (
    <>
    <ToastContainer autoClose={3000} />
      <Nav />
      <Banner />
      <DevStack devPromise={devPromise} />
      <Fotter />
    </>
  );
}

export default App;