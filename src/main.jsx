import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("satyam")).render(
  <Auth0Provider
    domain="dev-pfuyuakckli26ipp.au.auth0.com"
    clientId="ozEbUOPrbM5qw5eRO12mSg1ajwNGQels"
    authorizationParams={{
        redirect_uri: window.location.origin
      }}
  >
    <App />
  </Auth0Provider>
);
