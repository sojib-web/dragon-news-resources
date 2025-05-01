import React from "react";
import { Outlet } from "react-router"; // For nested route rendering
import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import Navbar from "../../Components/Navbar/Navbar";
import LeftAside from "../../Components/HomeLayouts/LeftAside";
import RightAside from "../../Components/HomeLayouts/RightAside";

const HomeLayout = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <Header /> {/* Top header component */}
        {/* Breaking News or Top Banner */}
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
        {/* Navigation Bar */}
        <nav className="w-11/12 mx-auto">
          <Navbar />
        </nav>
      </header>

      {/* Main Content Area: 3-column layout */}
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-10 mt-10">
        {/* Left Sidebar - col-span-3/12 */}
        <aside className="col-span-3">
          <LeftAside />
        </aside>

        {/* Center Content Outlet - nested routes render here */}
        <section className="main col-span-6">
          <Outlet />
        </section>

        {/* Right Sidebar - col-span-3/12 */}
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
