import React, { useState } from "react";

import Menu from "./Menu";
import Drawer from "./Drawer";
import "./globalStyles.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className="container">
        <a href="/">
          {open ? undefined : (
            <div className="flex">
              <h1 className="">Jay's World</h1>
            </div>
          )}
        </a>
        <a className="" onClick={() => setOpen(!open)}>
          <Menu></Menu>
        </a>
      </div>
      {open ? <Drawer open={open} setOpen={setOpen}></Drawer> : undefined}
    </div>
  );
};

export default Header;
