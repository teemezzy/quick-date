import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { createRoot } from 'react-dom/client';

import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Signup from "./Pages/Signup/Signup";
import Community from "./Pages/Community/Community";
import './App.css';
import OtpVerification from "./Pages/OtpVerification/OtpVerification";
import AccountSetup from "./Pages/AccountSetup/AccountSetup";
import Notification from "./Pages/Notification/Notification";
import AddPost from "./Pages/AddPost/AddPost";
import Post from "./Pages/Post/Post";
import Dates from "./Pages/Dates/Dates";
import Chats from "./Pages/Chats/Chats";
import UserProfile from "./Pages/UserProfile/UserProfile";
import MemberProfile from "./Pages/MemberProfile/MemberProfile";
import PersonalProfile from "./Pages/PersonalProfile/PersonalProfile";
import EditProfile from "./Pages/EditProfile/EditProfile";

import VerifyProfile from "./Pages/VerifyProfile/VerifyProfile";
import ProfileImages from "./Pages/ProfileImages/ProfileImages";

import Legal from "./Pages/Legal/Legal";
import Settings from "./Pages/Settings/Settings";
import Referrals from "./Pages/Referrals/Referrals";
import Support from "./Pages/Support/Support";
import Subscription from "./Pages/Subscription/Subscription";
import BuyToken from "./Pages/BuyToken/BuyToken";
import Wallet from "./Pages/Wallet/Wallet";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/acct-setup" element={<AccountSetup />} />
          <Route path="/community" element={<Community />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/community" element={<Community />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/post" element={<Post />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/personal-profile" element={<PersonalProfile />} />
          <Route path="/user/:username" element={<MemberProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />

          <Route path="/legal" element={<Legal />} /> 
          <Route path="/settings" element={<Settings />} />
          <Route path="/verify-profile" element={<VerifyProfile />} />
          <Route path="/profile-images" element={<ProfileImages />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/support" element={<Support />} />

          <Route path="/subscription" element={<Subscription />} />
          <Route path="/buy-token" element={<BuyToken />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
