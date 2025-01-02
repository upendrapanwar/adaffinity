import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/responsive.css';
import './assets/styles/style.css';
import 'font-awesome/css/font-awesome.min.css';
import AboutUs from './pages/static-pages/about-us';
import Faqs from './pages/static-pages/faqs';
import PrivacyPolicy from './pages/static-pages/privacy-policy';
import TermsConditions from './pages/static-pages/term-conditions';

import ContactUs from './pages/contact-us';
import { Layout } from './pages/layout';
import { Loader } from './components/loader';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import CreatorsDashboard from './pages/creators/creators-dashboard';
import Middlewares from './middlewares/auth';

const Home = lazy(() => import('./pages/home-page'));
const Videos = lazy(() => import('./pages/videos'));



function App() {
  return (
    <>
    <Routes>
      <Route path="/*" element= {
        <Suspense fallback={<Loader />}>
          <Layout>
            <PublicRoutes />
          </Layout>
        </Suspense>
        
      }/>
    
      <Route path="/creator/*" element={
        <Middlewares>
          <Suspense fallback={<Loader />}>
            <PrivateRoutes />
          </Suspense>
        </Middlewares>
      }/>
      </Routes>
    </>
    
  );
}

export default App;

export const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/faqs" element={<Faqs />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
        <Route path="/terms-and-conditions" element={<TermsConditions />}/>
        <Route path="/videos" element={<Videos />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
    </Routes>
    </>
    
  )
}

 export const PrivateRoutes = () => {
   return (
     <>
       <Routes>
        <Route path="creator-dashboard" element={<CreatorsDashboard />}/>
       </Routes>
     </>
   ) 
 }
