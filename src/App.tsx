import Nav from './components/Nav'
import Banner from './components/Banner'
import Fotter from './components/Fotter'

const devfetch = async () => 
{
  const res = await fetch ("/data.json");
  const data = await res.json();
}

function App() {

  const devPromise = devfetch
  return (
    <>
   <Nav />
   <Banner/>
   <Fotter/>
   <suspense>
    
   </suspense>
    </>
  )
}

export default App






