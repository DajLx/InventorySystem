import { useDispatch } from "react-redux";

import { closeModal } from "../../features/modal/modalSlice";

function AddNewCustomerContent({ modalProps }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit in AddNewCustomerContent");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new customer</h3>

      <label htmlFor="customer-name">Name</label>
      <input
        type="text"
        name="customer-name"
        id="customer-name"
        placeholder="Jesús Perez / Company S.A."
      />

      <div className="input-group">
        <div className="input-wrapper left-input">
          <label htmlFor="customer-id">ID</label>
          <input
            type="text"
            name="customer-id"
            id="customer-id"
            placeholder="12345678A / B12345678"
          />
        </div>

        <div className="input-wrapper right-input">
          <label htmlFor="customer-phone">Phone number</label>
          <label htmlFor="customer-phone">
            <i className="fa-solid fa-phone" aria-hidden></i>
          </label>
          <input
            type="text"
            name="customer-phone"
            id="customer-phone"
            placeholder="+34 600 123 456"
          />
        </div>
      </div>

      <div className="input-wrapper">
        <label htmlFor="customer-email">Email</label>
        <label htmlFor="customer-email">
          <i className="fa-solid fa-envelope" aria-hidden></i>
        </label>
        <input
          type="text"
          name="customer-email"
          id="customer-email"
          placeholder="Email"
        />
      </div>

      <div className="bttn-group">
        <button type="button" onClick={() => dispatch(closeModal())}>
          Cancel
        </button>

        <button type="submit">
          <i className="fa-solid fa-user-plus" aria-hidden></i>
          Save customer
        </button>
      </div>
    </form>
  );
}

export default AddNewCustomerContent;
