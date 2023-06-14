import { Route, Routes } from "react-router";
import Notice from "./pages/Notice";
import Roots from "./pages/Roots";
import Setting from "./pages/Setting";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";

export const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Roots />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
    </Routes>
);