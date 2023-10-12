import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './pages/about'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />  {/* Home is the component that will be rendered when user enters '/' in url */}
      <Route path="/profile" element={<Profile/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}