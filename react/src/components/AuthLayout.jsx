import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div id="auth-container">
      <div id="auth-card">
        <header id="auth-header">
          <img src="/" alt="Inventory System Logo" />
          <h2>Welcome to Inventory System</h2>
        </header>

        <main id="auth-boddy">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AuthLayout;
