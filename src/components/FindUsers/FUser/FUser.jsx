import React from "react";
import { NavLink } from "react-router-dom";
import s from "./FUser.module.css";
const FUser = (props) => {
  return (
    <div className={s.contaner}>
      <div className={s.imgCont}>
        <NavLink to={"/profile/" + props.id}>
          <img
            className={s.image}
            src={
              props.photos.small != null
                ? props.photos.small
                : "https://www.helicon.ru/local/templates/main/img/no-photo.png"
            }
            alt="dada"
          />
        </NavLink>
        {props.followed ? (
          <button
            disabled={props.isFollowingMass.some((id) => id === props.id)}
            className={s.button}
            onClick={() => {
              props.deleteFollow(props.id);
            }}
          >
            {props.followedStr}
          </button>
        ) : (
          <button
            disabled={props.isFollowingMass.some((id) => id === props.id)}
            className={s.button}
            onClick={() => {
              props.postFollow(props.id);
            }}
          >
            {props.followedStr}
          </button>
        )}
      </div>
      <div className={s.txtContaner}>
        <div className={s.name}>{props.name}</div>
        <div className={s.status}>{props.status}</div>
        <div className={s.country}>
          {props?.location?.country}
          <br />
          {props?.location?.city}
        </div>
      </div>
    </div>
  );
};

export default FUser;
