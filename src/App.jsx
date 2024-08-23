import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';
import IntervieweeHomePage from './pages/interviewee/interviewee-home';
import FounderHomePage from './pages/founder/founder-home';
import CreateInterviewPage from './pages/founder/create-interview';
import CalendarPage from './pages/founder/calendar';
import ManageInterviewPage from './pages/founder/manage-interview';
import ManageIntervieweePage from './pages/founder/manage-interviewee';
import FounderApplyPage from './pages/founder/founder-apply';
import ManagePage from './pages/founder/manage';
import IntervieweeApplyPage from './pages/interviewee/interviewee-apply';
import IntervieweeApplicationpage from './pages/interviewee/interviewee-application';

const App = () => {
  const id = 1;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/founderApply' element={<FounderApplyPage />} />
        <Route path='/interviewee' element={<IntervieweeHomePage />} />
        <Route path='/founder' element={<FounderHomePage id={id} />} />
        <Route path='/createInterview' element={<CreateInterviewPage />} />
        <Route path='/calendar' element={<CalendarPage />} />
        <Route path='/manageInterview' element={<ManageInterviewPage />} />
        <Route path='/intervieweeApply' element={<IntervieweeApplyPage />} />
        <Route
          path='/intervieweeApplication'
          element={<IntervieweeApplicationpage />}
        />
        <Route
          path='/manageInterview/manageInterviewee/:id'
          element={<ManageIntervieweePage />}
        />
        <Route path='/manage' element={<ManagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
