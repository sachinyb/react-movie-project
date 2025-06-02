import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites/>}/>
        <Route
          path="*"
          element={<h1 className="text-2xl m-4">404 Not Found</h1>}
        />
      </Routes>
      </Provider>
    </>
  );
}

export default App;
