import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/";
import { LogOutModal, SignInModal, SignUpModal } from "../../Modals";

const type = {
  register: SignUpModal,
  login: SignInModal,
  logout: LogOutModal,
};

export const ReduxModal = () => {
  const dispatch = useDispatch();
  const { modalType, isOpen } = useSelector((state) => state.modal);
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      {modalType &&
        type[modalType]({
          onClose: handleCloseModal,
          isOpen: isOpen,
        })}
    </div>
  );
};
