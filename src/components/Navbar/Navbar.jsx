import React from "react";
import { NavLink } from "react-router-dom";
import navbars from "./Navbar.module.css";
const Navbar = (props) => {
  const activeLink = (navData) =>
    navData.isActive ? navbars.active : navbars.item;

  const navbarElem = props.navButtons.map((nav) => (
    <NavLink to={nav.path} className={activeLink}>
      <div className={navbars.links}>
        <img className={navbars.imageSize} src={`${nav.image}`} alt="qwerty" />
        {nav.name}
      </div>
    </NavLink>
  ));
  let countFr = 0;
  const friendsElem = props.friends.map((frn) => {
    if (countFr < 6) {
      countFr++;
      return (
        <div className={navbars.friend}>
          <img
            src="https://ognisveta.ru/upload/iblock/4a2/4a29ef3be58168227c6f57680fc3576b.jpg"
            alt="Avatar"
          />
          {frn.name}
        </div>
      );
    }
  });

  return (
    <div className={navbars.box}>
      <div className={navbars.navBox}>
        <nav>{navbarElem}</nav>
      </div>
      <div className={navbars.friendBox}>
        <div className={navbars.titFrnd}>Friends</div>
        <div className={navbars.frndGrid}>
          {friendsElem.length === 0 ? (
            <div className={navbars.noFrnd}>"You hadn`t friends"</div>
          ) : (
            <>
              <div>{friendsElem}</div>
              <NavLink to={"/friends"} className={navbars.friendsLink}>
                See all friends
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
