import { Routes, Route } from "react-router-dom";
import { LandingPage } from '../pages'

export const HectaRoutes = () => {
  return (
    <Routes>
        <Route path="/*" element={ <LandingPage /> }/>
    </Routes>
  )
}
