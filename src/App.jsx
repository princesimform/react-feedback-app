import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackPage from "./pages/FeedbackPage";
import AboutPage from "./pages/AboutPage";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<FeedbackPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
