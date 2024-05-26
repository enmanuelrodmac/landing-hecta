import React from 'react'
import { Routes, Route } from "react-router-dom";
import { HectaRoutes } from '../hecta';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <HectaRoutes /> }/>
        {/* <Route path="login" element={<LoginPage />}/> */}
    </Routes>
  )
}
