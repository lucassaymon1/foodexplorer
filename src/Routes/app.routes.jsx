import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Details } from "../Pages/Details";
import { New } from "../Pages/New";
import { Edit } from "../Pages/Edit";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}