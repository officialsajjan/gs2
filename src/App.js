import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Forgate from "./pages/Forgate";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin"
import Header from "./components/Header"
function App() {

  
  return (
    <>
     <Router>
        <Header>
        </Header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Forgate" element={<Forgate />}/>
        <Route path="Offers" element={<Offers />}/>
        <Route path="Signin" element={<Signin />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
