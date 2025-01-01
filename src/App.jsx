import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import GymAppBar from './components/GymAppBar.jsx';

function App() {

  return (
    <>
      <main>
        <GymAppBar appName="Gym Gest" />
        <Home />
      </main>
    </>
  )
}

export default App
