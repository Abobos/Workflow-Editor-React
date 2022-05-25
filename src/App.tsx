import "./index.styles";
import { GlobalStyle } from "./index.styles";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Suspense } from "react";

import Home from "UI/pages/Home";
import Loader from "UI/molecules/Loader/Loader";

const App = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
);

export default App;
