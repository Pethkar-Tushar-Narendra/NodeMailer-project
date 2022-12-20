import UserFormScreen from './Screens/UserForm/UserFormScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDisplay from './Screens/UserDisplay/UserDisplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserFormScreen />} />
        <Route path="/users" element={<UserDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
