import { Outlet } from "react-router";

import Nav from "./home/Nav";

function Home() {
  return (
    <div id="main-container">
      <div id="main-card">
        <header id="main-header">
          <Nav />
        </header>

        <main id="main-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Home;
