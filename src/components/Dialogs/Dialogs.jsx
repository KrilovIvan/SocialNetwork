import React from "react";
import dlg from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElem = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  const messagesElem = props.messagesData.map((message) => (
    <Message message={message.message} />
  ));

  let refMsg = React.createRef();

  const sendMsg = () => {
    props.sendMsg();
  };

  const onMessageChange = () => {
    const upText = refMsg.current.value;
    props.onMessageChange(upText);
  };
  return (
    <div className={dlg.dialogCont}>
      <div className={dlg.dialogs}>{dialogsElem}</div>
      <div className={dlg.messages}>{messagesElem}</div>
      <div className={dlg.textArCont}>
        <textarea
          value={props.newText}
          onChange={onMessageChange}
          ref={refMsg}
          className={dlg.textAr}
          placeholder="Ваше сообщение"
        ></textarea>
        <button className={dlg.butSend} onClick={sendMsg}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
