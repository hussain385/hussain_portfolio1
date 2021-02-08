import "./App.css";
import Footer from "./components/Nav-Foot-Components/Footer";
import Navbar from "./components/Nav-Foot-Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Config/Routing";
import { AuthProvider } from "./context/AuthContext";

// Auth provider makes the values available from the context/authContext file
// Router is used trace the location of the routes

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routing />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
