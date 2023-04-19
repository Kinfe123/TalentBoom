// import React from "react";
// import { UserButton, useSession, useUser } from "@clerk/clerk-react";
// import "./Hello.css";
// import { Navigate } from "react-router-dom";
// function Hello() {
//   const { user, isSignedIn } = useUser();
//   console.log(isSignedIn)
//   if(!isSignedIn) {
//     return <Navigate to='/' />
//   }
 
//   return (
//     <div className="header">
//       <div className="header-subs">
//         <p>Hello world {user && user.username}</p>
//         <div className="fix">
//           <UserButton />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hello;



import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './user-components/components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './user-components/pages';
import './Hello.css';
import courses from '../../src/components/Course.json'
import { useStateContext } from './user-components/contexts/ContextProvider';
import CompletedCourses from '../components/CompletedCourse';
import { useUser } from '@clerk/clerk-react';
const App = ({children}) => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const  {user} = useUser()
  
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    
        <div classNamenp="flex relative dark:bg-main-dark-bg">
      
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <div>
                {children}
              </div>

              
            </div>
            <Footer />
          </div>
        </div>
      
    </div>
  );
};

export default App;
