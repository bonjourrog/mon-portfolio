import {BrowserRouter} from 'react-router-dom';
import './App.css'
import { AppRoutes } from './App.routes';

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
