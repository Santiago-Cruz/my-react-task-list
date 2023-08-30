import { Menu }  from "./Menu";
import { Home } from "../pages/Home";
import { SobreNosotros } from "../pages/SobreNosotros";
import App from "./App";
import { BrowserRouter, Route, Routes} from "react-router-dom";

export function AppRouter() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<SobreNosotros />} />
        <Route path="/aboutus/:tareas" element={<App />} />
      </Routes>
    );
  }

export default function Appi() {
    return (
      <div>
        <BrowserRouter>
          <Menu />
          <AppRouter/>
        </BrowserRouter>
      </div>
    );
  }