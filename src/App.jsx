import { Routes,Route, useNavigate } from "react-router-dom"
import Home from "./components/Home"
import Content from "./components/Content"
import Search from "./components/Search";
export const App = () => {
  const navigate = useNavigate();

  return (
    <>
    <Routes>
      <Route exact path="/" element = {<Home />} />
      <Route exact path="/data" element = {<Content />} />
      <Route exact path="/search/:id" element = {<Search />} />
    </Routes>
    </>
    
  )
}
