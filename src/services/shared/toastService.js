import { store } from "react-notifications-component";

export const showMessage = (title, message, type) => {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 4000,
      click: true,
      onScreen: true,
    },
  });
};
