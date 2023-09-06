// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./styles.css";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <ThemeProvider>
      <div className="flex flex-col min-h-screen dark:bg-slate-900 bg-neutral-200">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
