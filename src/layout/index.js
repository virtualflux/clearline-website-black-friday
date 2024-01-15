"use client";

import { useState } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const PageLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => {
    sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
  };

  return (
    <div>
      <TawkMessengerReact
        propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTYID}
        widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGETID}
      />
      <Navbar sidebarOpen={sidebarOpen} handleSidebar={handleSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} handleSidebar={handleSidebar} />
      <div className="flex-1 overflow-y-auto h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
