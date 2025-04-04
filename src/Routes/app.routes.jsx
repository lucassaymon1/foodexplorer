import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Details } from "../Pages/Details";
import { New } from "../Pages/New";
import { Edit } from "../Pages/Edit";
import { Cart } from "../Pages/Cart";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}