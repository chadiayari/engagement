import { Route, Routes } from "react-router-dom";

import EngagementPartyForm from "@/pages/index";

function App() {
  return (
    <Routes>
      <Route element={<EngagementPartyForm />} path="/" />
    </Routes>
  );
}

export default App;
