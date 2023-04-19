import LandingPage from "./LandingPage";
// import "./styles.css";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Jobs from "./components/Jobs";
import Hello from "./pages/Hello";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboardside from "./components/Dashboardside";
import Skilldetail from "./components/Skilldetail";
import Skills from "./components/Skills";



const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
export default function App() {
  return (
    <div>
      {/* <Dashboardside/> */}
      <Skilldetail/>
      <Skills/>
    {/* <ClerkProvider publishableKey={clerkPubKey}>
        
      <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<LandingPage />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path='/profile' element={
            <ProtectedRoute>
              <Hello />
            </ProtectedRoute>
          }
          />
        </Routes>
      </BrowserRouter>
      </ClerkProvider> */}
    </div>
  );
}
