import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Home from "./pages/Home";
import FotoVideo from "./pages/FotoVideo";
import Branding from "./pages/Branding";
import InvitacionWeb from "./pages/InvitacionWeb";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/foto-video" component={FotoVideo} />
        <Route path="/branding" component={Branding} />
        <Route path="/invitacion-web" component={InvitacionWeb} />
        {/* Fallback to Home if unknown route */}
        <Route component={Home} />
      </Switch>
    </>
  );
}
