"use client";

import { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const PageLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
  };

  return (
    <div>
      <Navbar sidebarOpen={sidebarOpen} handleSidebar={handleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} handleSidebar={handleSidebar} />
      <div className="flex-1 overflow-y-auto h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
