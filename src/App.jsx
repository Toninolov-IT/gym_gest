import Home from './views/Home.jsx';
import GymAppBar from './components/GymAppBar.jsx';
import { useSelector } from 'react-redux';
import { selectUsers } from './store/userSlice.js'
import SignIn from './views/SignIn.jsx';

function App() {

  const user = useSelector(selectUsers);

  return (
    <>
    <main>
     <GymAppBar appName="Gym Gest" user = {user}/>
      {user.currentUser ? 
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter> 
      : 
        <SignIn />
      }   
    </main>
    </>
  )
}

export default App
