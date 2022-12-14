import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Courses from './components/courses/Courses';
import CourseShow from './components/courses/CourseShow';
import MainNavbar from './components/shared/MainNavbar';
import Users from './components/users/Users';
import UserShow from './components/users/UserShow';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:id' element={<CourseShow />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<UserShow />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;