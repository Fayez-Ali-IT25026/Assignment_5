import Nav from './components/Nav'
import Banner from './components/Banner'
import Fotter from './components/Fotter'
import type { promises } from './dev types/devStackType';
import dev_stack from './components/devstack/dev_stack'
import { Suspense } from 'react';


const devfetch = async ():promises<MydevStack[]> => 
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
   <Fotter/>
   <Suspense fallback = {<h2>Loading .....</h2>}>
    <dev_stack devPromise={devPromise} />
   </Suspense>
    </>
  )
}

export default App






