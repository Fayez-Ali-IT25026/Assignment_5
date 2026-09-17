import Nav from './components/Nav'
import Banner from './components/Banner'
import Fotter from './components/Fotter'
import type { MydevStack } from './dev types/devStackType';
import DevStack from './components/devstack/DevStack'
import { Suspense } from 'react';


const devfetch = async (): Promise<MydevStack[]> => 
{
  const res = await fetch ("/data.json");
  const data = await res.json();
   return data;
}

function App() {

  const devPromise = devfetch();
  return (
    <>
   <Nav />
   <Banner/>
   <Suspense fallback = {<h2>Loading .....</h2>}>
    <DevStack devPromise={devPromise} />
   </Suspense>
   <Fotter/>
   
    </>
  )
}

export default App






