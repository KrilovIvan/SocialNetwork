import React from "react";
import { useState } from "react";
import s from "./ProfileStatus.module.css";
const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    !editMode ? setEditMode(true) : setEditMode(false);
  };

  const onInputChange = () => {};

  return (
    <div className={s.statusBar}>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>{props.aboutMe}</span>
        </div>
      ) : (
        <div className={s.inputCont}>
          <input
            className={s.input}
            value={props.aboutMe}
            onBlur={activateEditMode}
            autoFocus={true}
            onChange={onInputChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
