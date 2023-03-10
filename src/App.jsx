import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Recipy from "./pages/Recipy/Recipy";
import Fridge from "./pages/Fridge/Fridge";
import Profile from "./pages/Profile/Profile";
import MainLayout from "./layout/MainLayout";
import { useEffect } from "react";
import { loadData } from "./redux/slices/auth";
import { useDispatch } from "react-redux";
import NewRecipy from "./pages/NewRecipy/NewRecipy";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData())
  }, [])
  
  return (
    <div className="app">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/fridge" element={<Fridge />} />
          <Route path="/new-recipy" element={<NewRecipy />} />
          <Route path="/recipy/:recipyId" element={<Recipy />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
