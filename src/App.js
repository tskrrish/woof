import Header from './Header';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WoofPage from './WoofPage.js';
import chats from './Chats.js';



function App() {
  return (
    <div className="App">
            <Router>
            <Header />

        <Routes>
          <Route path="/chat" element={<h1>I am the chat page</h1>} />
          <Route path='/account' element={<h1>Account Page</h1>} />
          <Route path='/' element={<WoofPage />} />
        </Routes>
      </Router>
    </div>
  );
}
  

export default App;
