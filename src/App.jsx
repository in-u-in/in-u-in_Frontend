import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';
import IntervieweeHomePage from './pages/interviewee/interviewee-home';
import FounderHomePage from './pages/founder/founder-home';
import CreateInterviewPage from './pages/founder/create-interview';
import CalendarPage from './pages/founder/calendar';
import ManageIntervieweePage from './pages/founder/manage-interviewee';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/interviewee' element={<IntervieweeHomePage />} />
        <Route path='/founder' element={<FounderHomePage />} />
        <Route path='/createInterview' element={<CreateInterviewPage />} />
        <Route path='/calendar' element={<CalendarPage />} />
        <Route path='/manageInterviewee' element={<ManageIntervieweePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
