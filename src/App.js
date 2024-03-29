import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ForgotPassword from "./pages/ForgotPassword"
import Explore from "./pages/Explore"
import Profile from "./pages/Profile"
import Offers from "./pages/Offers"
import CreatListing from "./pages/CreatListing"
import EditListing from "./pages/EditListing"
import Category from "./pages/Category"
import Listing from "./pages/Listing"
import Contact from "./pages/Contact"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Navbar from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute"


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/create-listing' element={<CreatListing />} />
        <Route path='/edit-listing/:listingId' element={<EditListing />} />
        <Route path='/category/:categoryName/:listingId' element={<Listing />} />
        <Route path='/contact/:landlordId' element={<Contact />} />
      </Routes>
     <Navbar />
    </Router>
    <ToastContainer />
    </>
  )
}

export default App
