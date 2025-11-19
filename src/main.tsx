import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// AOS IMPORTS
import AOS from "aos";
import "aos/dist/aos.css";

// INIT AOS
AOS.init({
  duration: 800,
  once: true,
  easing: "ease-out-cubic",
});

createRoot(document.getElementById("root")!).render(<App />);
