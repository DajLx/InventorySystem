import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div>
      <p>
        This is the <b>AuthLayout</b>
      </p>

      <Outlet />
    </div>
  );
}

export default AuthLayout;
