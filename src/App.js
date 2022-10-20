import { BrowserRouter, Routes, Route } from 'react-router-dom';
// This Is Buyer Pages
import HomeBuyer from './pages/buyer/home/index.jsx';
import Myrequest from './pages/buyer/myrequest/index.jsx';
import ForgetPassword from './pages/password/forgetpassword.jsx';
import Updatepassword from './pages/password/updatepassword.jsx';
import Verification from './pages/password/verification.jsx';
import Profile from './pages/buyer/profile/index.jsx';
import SignIn from './pages/signin/index.jsx';
import Signup from './pages/signup/index.jsx';
import CreateRequest from './pages/buyer/createrequest/index.jsx';
import CreateIssue from './pages/buyer/createissue/index.jsx';
import CreateReview from './pages/buyer/createreview/index.jsx';
import ShowRequest from './pages/buyer/showrequest/index.jsx';
import Questions from './pages/buyer/questions/index.jsx';
import Offers from './pages/buyer/offers/index.jsx';
import Suppliers from './pages/buyer/suppliers/index.jsx';
// This Is Seller Pages
import HomeSeller from './pages/seller/home/index.jsx';
import MyRequestSeller from './pages/seller/myrequest/index.jsx';

function App() {
  return (
    <main className={"main"}>
      <BrowserRouter>
        <Routes>
        {localStorage.getItem("tokenclicklized") === null ?
        <Route path="/" element={<SignIn />} exact />
        :
        <Route path="/" element={<HomeBuyer />} exact />      
      //<Route path="/" element={<HomeSeller />} exact />
      }
      <Route path="/signup" element={<Signup />} exact />
      <Route path="/forgetpassword" element={<ForgetPassword />} exact />
      <Route path="/verification" element={<Verification />} exact />
      <Route path="/updatepassword" element={<Updatepassword />} exact />
      {/*This Is Buyer Pages*/}
      <Route path="/myrequest" element={<Myrequest />} exact />
      <Route path="/suppliers" element={<Suppliers />} exact />
      <Route path="/profile" element={<Profile />} exact />
      <Route path="/createrequest" element={<CreateRequest />} exact />
      <Route path="/createissue" element={<CreateIssue />} exact />
      <Route path="/createreview" element={<CreateReview />} exact />
      <Route path="/showrequest/:name/:id" element={<ShowRequest />} exact />
      <Route path="/questions/:name/:id" element={<Questions />} exact />
      <Route path="/offers/:name/:id" element={<Offers />} exact />
      {/*This Is Seller Pages*/}
      <Route path="/myrequestseller" element={<MyRequestSeller />} exact />
      
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
