import Filter from '../components/Filter.jsx';
import TodosList from '../components/TodosList.jsx';
import GymAppBar from '../components/GymAppBar.jsx';
import { selectUsers } from '../store/userSlice.js'
import { useSelector } from 'react-redux';


function Home() {
    const user = useSelector(selectUsers);
    return (
    <>

        <GymAppBar appName="Gym Gest" user = {user}/>
        <div className="container">
            <Filter />
        
            <TodosList />
        </div>
    </>
    )
  }
  
  export default Home
