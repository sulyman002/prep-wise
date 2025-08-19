import React from "react";
import { Form } from "./components/Form/Form.jsx";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/PostReview/Dashboard.jsx";
import { WorkflowPage } from "./components/WorkFlow/WorkflowPage.jsx";
import { InterviewPage } from "./components/InterviewPage/InterviewPage.jsx"
import { FeedBack } from "./components/FeedBack/FeedBack.jsx";
import { InterviewConfirmation } from "./components/InterviewConfirmation/InterviewConfirmation.jsx";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/WorkflowPage/:id" element={<WorkflowPage />} />
        <Route path="/InterviewConfirmation" element={<InterviewConfirmation />} />
        <Route path="/InterviewPage" element={<InterviewPage />} />
        <Route path="/FeedBack" element={<FeedBack />} />
      </Routes>
    </>
  );
}

export default App;
