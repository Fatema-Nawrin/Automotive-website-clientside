import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Purchase from './Pages/Purchase/Purchase';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import MyOrders from './Pages/Dashboard/MyOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='purchase/:productId' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<AddReview />}></Route>
          <Route path='orders' element={<MyOrders />}></Route>
          <Route path='makeadmin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>

        </Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
