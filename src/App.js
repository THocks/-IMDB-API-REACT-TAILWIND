
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";



function App() {
  return (
   <>
  
   <Router>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="movie/:id" element={<Movie/>}/>
      <Route path="search" element={<Search/>} />
    </Routes>
   </Router>
   <Footer/>
   
   </>
  
  
  );
}

export default App;
