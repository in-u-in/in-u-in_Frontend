import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalendarPage from './calendar';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/calendar' element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
