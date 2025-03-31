import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles for fonts
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
