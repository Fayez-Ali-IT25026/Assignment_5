import Nav from './components/Nav';
import Banner from './components/Banner';
import Fotter from './components/Fotter';
import DevStack from './components/devstack/DevStack';
import type { MydevStack } from './dev types/devStackType';

const devfetch = async (): Promise<MydevStack[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const devPromise = devfetch();

  return (
    <>
      <Nav />
      <Banner />
      <DevStack devPromise={devPromise} />
      <Fotter />
    </>
  );
}

export default App;