import {Routes, Route} from 'react-router-dom'

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
  return(
    <div>
      <h1>I am the shop page</h1>
    </div>
  )
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        {/* added index makes the HOME component a direct child of the "/" path  */}
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop/>} />
        <Route path='sign-in' element={<SignIn/>} />
      </Route>
    
    </Routes>
  );
}

export default App;
