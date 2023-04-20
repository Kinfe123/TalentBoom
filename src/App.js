import LandingPage from "./LandingPage";
// import "./styles.css";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Jobs from "./components/Jobs";
import Hello from "./pages/Hello";
import ProtectedRoute from "./components/ProtectedRoute";
import {ContextProvider } from '../src/pages/user-components/contexts/ContextProvider'
import CompletedCourses from "./components/CompletedCourse";
import OngoingCourses from "./components/OngoingCourses";
import courses from './components/Course.json'
import Skills from "./components/Skills";
import Skilldetail from "./components/Skilldetail";
import { Calendar, Customers, Employees, Orders } from "./pages/user-components/pages";
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;


export default function App() {
  return (
    <div>
    <ClerkProvider publishableKey={clerkPubKey}>
        
      <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/e" element={ <Orders /> } />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skills/:id" element={<Skilldetail />} />

          <Route path="/jobs" element={<Jobs />} />
          <Route path='/profile' element={
            <ProtectedRoute>
              <ContextProvider>
              <Hello>
              <CompletedCourses  courses={courses} />
              </Hello>
              </ContextProvider>


        
            </ProtectedRoute>
             }
             />
          <Route path='/course' element={
            <ProtectedRoute>
              <ContextProvider>
              <Hello>
              <CompletedCourses  courses={courses} />
              </Hello>
              </ContextProvider>


        
            </ProtectedRoute>
             }
             />
          <Route path='/ongoing' element={
            <ProtectedRoute>
           <ContextProvider>
              <Hello>

                <OngoingCourses  courses={courses} />
              </Hello>

           </ContextProvider>
            </ProtectedRoute>
             }
             />
                 <Route path='/calendar' element={
            <ProtectedRoute>
           <ContextProvider>
              <Hello>

                <Employees />
              </Hello>

           </ContextProvider>
            </ProtectedRoute>
             }
             />

          {/* <Route path='/profile' element={
            <ProtectedRoute>
           <ContextProvider>
              <Hello />


           </ContextProvider>
            </ProtectedRoute>
             }
             />
             <Route path='/profile' element={
            <ProtectedRoute>
           <ContextProvider>
              <Hello />


           </ContextProvider>
            </ProtectedRoute>
             }
             /> */}

          

        </Routes>
      </BrowserRouter>
      </ClerkProvider>
    </div>
  );
}
