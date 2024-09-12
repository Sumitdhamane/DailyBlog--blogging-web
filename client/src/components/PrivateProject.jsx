import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function PrivateProject() {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateProject;
