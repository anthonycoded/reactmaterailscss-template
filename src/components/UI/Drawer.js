import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Theme from "../../config/Theme";

const Drawer = ({ setOpen, authorized, logout, admin }) => {
  const closeDrawer = () => {
    setOpen(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", closeDrawer);
    return function cleanup() {
      document.body.removeEventListener("click", closeDrawer);
    };
  }, []);

  return (
    <div
      className=" h-80 w-72 inset-y-0 right-0 top-14 transform flex flex-col fixed rounded-l-xl"
      onMouseLeave={(e) => setOpen(false)}
      style={{ backgroundColor: theme.colors.primary }}
    >
      <div className="flex flex-col p-8 space-y-4">
        <Link
          to="/"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/apparel"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Apparel
        </Link>
        <Link
          to="/beats"
          className=" text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Beats
        </Link>
        <Link
          to="/faqs"
          className="text-2xl font-medium h-8 flex items-center"
          onClick={() => setOpen(false)}
        >
          Faqs
        </Link>
        {authorized && admin ? (
          <Link
            to="/admin"
            className="text-xl font-medium"
            onClick={() => setOpen(false)}
          >
            Admin
          </Link>
        ) : authorized && !admin ? (
          <Link
            to="/account"
            className="text-2xl font-medium h-8 flex items-center"
            onClick={() => setOpen(false)}
          >
            Account
          </Link>
        ) : undefined}
        {authorized ? (
          <React.Fragment>
            <button
              className="text-xl font-medium flex items-center"
              onClick={() => logout()}
            >
              Logout
            </button>
          </React.Fragment>
        ) : (
          <Link
            to="/login"
            className="text-2xl font-medium h-8 flex items-center"
            onClick={() => setOpen(false)}
          >
            Login/Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Drawer;
