import {useRoutes} from 'react-router-dom';
import Home from '../Home';
export const AppRoutes = ()=>{
    const routes = useRoutes([
        {path:"", element: <Home/>},
        {path:"*", element:<p>Not fouuuuund</p>}
    ])
    return routes;
}