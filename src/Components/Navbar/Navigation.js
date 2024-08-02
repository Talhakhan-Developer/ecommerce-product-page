import React from "react";
import Menu from "../../images/icon-menu.svg";
import close from "../../images/icon-close.svg";
import { useState } from "react";
import { useTransition, animated } from "react-spring";

function Navigation() {
  let [showMenu, setShowMenu] = useState(false);

  const masktransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
  });

  const menutransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    delay: 200,
  });
  return (
    <>
      <button className=" outline:none flex items-center md:hidden cursor-pointer">
        <img src={Menu} alt="icon pic" onClick={() => setShowMenu(!showMenu)} />
      </button>
      {masktransitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="bg-background-bg50 opacity-50 fixed top-0 left-0 w-full h-full z-50"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}
      {menutransitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="fixed bg-neutral-White top-0 left-0 w-[70%] h-full z-50 shadow"
            >
              <div className="p-5">
                <img
                  src={close}
                  alt=""
                  className="pb-8 cursor-pointer"
                  onClick={() => setShowMenu(false)}
                />
                <ul className="flex flex-col gap-4 font-fw700 ">
                  <li className="cursor-pointer">Collection</li>
                  <li className="cursor-pointer">Men</li>
                  <li className="cursor-pointer">Women</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Contact</li>
                </ul>
              </div>
            </animated.div>
          )
      )}
    </>
  );
}

export default Navigation;
