import './App.css';
import HomePage from './components/Homepage'
import ChatPage from './components/Chatpage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/chat" exact component={ChatPage} />
    </Router>
  );
}

export default App;
