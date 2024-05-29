import React from 'react'
import Navbar from './components/Navbar'
import AddEmployee from './components/Addemployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmployeeList from './components/EmployeeList'
import Updateemployee from './components/Updateemployee'

const App = () => {
  return <div>
    <BrowserRouter> 
     <Navbar />
     <Routes>

     
      <Route index element={<EmployeeList />} />
      <Route path="/add" element={<AddEmployee />} />
      <Route path="/update/:id" element={<Updateemployee />} />

     </Routes>
     
     
    </BrowserRouter>
   

  </div>

}

export default App
