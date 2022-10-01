import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";

import withAuthNavRep from "../../hoc/withAuthNavRep";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    newText: state.dialogsPage.newText,
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (upText) => {
      dispatch(updateNewMessageTextActionCreator(upText));
    },
    sendMsg: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

let AuthNavRepComp = withAuthNavRep(Dialogs);

const DialogsContaner = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthNavRepComp);

export default DialogsContaner;
