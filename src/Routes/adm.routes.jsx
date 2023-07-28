import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Details } from "../Pages/Details";
import { New } from "../Pages/New";
import { Edit } from "../Pages/Edit";

export function AdmRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  )
}