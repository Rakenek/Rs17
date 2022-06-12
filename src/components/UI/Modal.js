import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const overlayDOM = document.querySelector("#overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, overlayDOM)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayDOM
      )}
    </Fragment>
  );
};

export default Modal;
