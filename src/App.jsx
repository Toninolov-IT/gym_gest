import Home from './views/Home.jsx';
import { useSelector } from 'react-redux';
import { selectUsers } from './store/userSlice.js'
import SignIn from './views/SignIn.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './views/ForgotPassword.jsx';

function App() {

  const user = useSelector(selectUsers);

  return (
    <>
      {user.currentUser ? 
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter> 
      : 
        <SignIn />
      }   
    </>
  )
}

export default App
