import "./index.styles";
import { GlobalStyle } from "./index.styles";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loader from "UI/molecules/Loader/Loader";

import DataProvider from "context/dataProvider";

const Home = lazy(() => import("UI/pages/Home/Home"));
const Workflows = lazy(() => import("UI/pages/Workflows/Workflows"));
const Workflow = lazy(() => import("UI/pages/Workflow/Workflow"));
const WorkflowForm = lazy(() => import("UI/pages/WorkflowForm/WorkflowForm"));

const App = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workflow" element={<Workflows />} />
            <Route path="/workflow/:id" element={<Workflow />} />
            <Route path="/workflow/new" element={<WorkflowForm />} />
          </Routes>
        </DataProvider>
      </Suspense>
    </BrowserRouter>
  </>
);

export default App;
