import {BrowserRouter} from 'react-router-dom';
import './App.css'
import { AppRoutes } from './App.routes';

function App() {

  return (
    <div className='App'>
        <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
