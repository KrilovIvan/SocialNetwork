import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./ProfileStatus.module.css";
const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  debugger;
  console.log(status);
  const activateEditMode = () => {
    if (!editMode) {
      setEditMode(true);
    } else {
      setEditMode(false);
      props.updateUserStatus(status);
    }
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div className={s.statusBar}>
      {!editMode ? (
        <div>
          <span onDoubleClick={activateEditMode}>{status}</span>
        </div>
      ) : (
        <div className={s.inputCont}>
          <input
            className={s.input}
            value={status}
            onBlur={activateEditMode}
            autoFocus={true}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
