import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Category from './pages/Category';
import CreateListing from './pages/CreateListing';
import EditListing from './pages/EditListing';
import Listing from './pages/Listing';
import Contact from './pages/Contact';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore></Explore>}></Route>
          <Route path="/offers" element={<Offers></Offers>}></Route>
          <Route path="/category/:categoryName" element={<Category></Category>}></Route>
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile></Profile>} />
          </Route>
          <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
          <Route path="/create-listing" element={<CreateListing></CreateListing>}></Route>
          <Route path="/edit-listing/:listingId" element={<EditListing></EditListing>}></Route>

          <Route path="/category/:categoryName/:listingId" element={<Listing></Listing>}></Route>
          <Route path="/contact/:landlordId" element={<Contact></Contact>}></Route>

        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
