import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { FinalScreen } from './pages/FinalScreen'
import { Questions } from './pages/Questions'
import { Settings } from './pages/Settings'

function App() {

  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Settings />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/score" element={<FinalScreen />} />
      </Routes>
    </Router>
  )
}

export default App
