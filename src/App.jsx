import React from "react";
import { Form } from "./components/Form/Form.jsx";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/PostReview/Dashboard.jsx";
import { WorkflowPage } from "./components/WorkFlow/WorkflowPage.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/WorkflowPage" element={<WorkflowPage />} />
      </Routes>
      
    </>
  );
}

export default App;
