import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import FirstPage from './components/FirstPage'
import SecondPage from './component2/SecondPage'
import ThirdPage from './component3/ThirdPage'
import ErrorPage from './ErrorPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<FirstPage />}/>
      <Route path='/secondPage' element={<SecondPage />} />
      <Route path='/thirdPage' element={<ThirdPage />} /> 
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
    </>

      
    
  )
}

export default App