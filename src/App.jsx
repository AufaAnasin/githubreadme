import './App.css'
import { useRoutes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

// page
import Home from './pages/Home'
import Result from './pages/Result'
import UserProfile from './pages/UserProfile'
import ReadmeViewer from './pages/ReadmeViewer'

function App() {
  let element = useRoutes([
    {path: "/", element: <Home />},
    {path:"result", element: <Result />},
    {path:"user-profile", element:<UserProfile />},
    {path:"readme", element:<ReadmeViewer />},
  ])

  return element;
}

export default App
