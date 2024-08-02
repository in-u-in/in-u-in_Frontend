import { BrowserRouter, Route, Routes } from "react-router-dom";
import FounderHomePage from "./founder-home";
import IntervieweeHomePage from "./interviewee-home";
import CreateInterviewPage from "./create-interview";
import "./styles/globals.css"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/founderhome" element={<FounderHomePage />} />
            <Route path="/intervieweehome" element={<IntervieweeHomePage/>}/>
            <Route path="/createinterview" element={<CreateInterviewPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
