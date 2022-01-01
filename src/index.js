import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import New from "./routes/New";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<New />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
