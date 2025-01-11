import Filter from '../components/Filter.jsx';
import TodosList from '../components/TodosList.jsx';

import { selectUsers } from '../store/userSlice.js'
import { useSelector } from 'react-redux';
import ClassList from '../components/classes/ClassList.jsx';


function Home() {
    const user = useSelector(selectUsers);
    return (
    <>
        <div className="container">
            <ClassList />
        </div>
    </>
    )
  }
  
  export default Home
