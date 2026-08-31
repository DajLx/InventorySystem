import { useSelector } from "react-redux";

import AddNewCustomerContent from "./modal/AddNewCustomerContent";
import AddToInvoiceContent from "./modal/AddToInvoiceContent";

import { MODAL_TYPES } from "../constants/modalTypes";

function ModalLayout() {
  const { isOpen, modalType, modalProps } = useSelector((state) => state.modal);

  if (!isOpen) return null;

  const renderModalContent = () => {
    switch (modalType) {
      case MODAL_TYPES.ADD_NEW_CUSTOMER:
        return <AddNewCustomerContent {...modalProps} />;
      case MODAL_TYPES.ADD_TO_INVOICE:
        return <AddToInvoiceContent {...modalProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">{renderModalContent()}</div>
    </div>
  );
}

export default ModalLayout;
