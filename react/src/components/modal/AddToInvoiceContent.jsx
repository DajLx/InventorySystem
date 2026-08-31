import { useDispatch } from "react-redux";

import { closeModal } from "../../features/modal/modalSlice";

function AddToInvoiceContent({ modalProps }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit on AddToInvoiceContent");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add item to invoice</h3>

      <fieldset className="search-criteria-fieldset">
        <legend>Search criteria:</legend>

        <label>
          <input type="radio" name="criteria" value="supplier" defaultChecked />{" "}
          Supplier
        </label>
        <label>
          <input type="radio" name="criteria" value="category" />
          Category
        </label>
      </fieldset>

      <div className="input-wrapper">
        <label htmlFor="search-product-bar">Produc / Ref</label>
        <input type="text" name="search-product-bar" id="search-product-bar" />
        <i className="fa-solid fa-angle-down" aria-hidden></i>
      </div>

      <div className="input-group">
        <div className="input-wrapper">
          <p>Ref / item ID</p>
          <input type="text" disabled />
        </div>

        <div className="input-wrapper">
          <p>Unit price ($)</p>
          <input type="text" disabled />
        </div>

        <div className="input-wrapper">
          <label htmlFor="qty-number">Quantity</label>
          <input type="number" name="qty-number" id="qty-number" />
          <div className="qty-bttns">
            <i className="fa-solid fa-angle-up" aria-hidden></i>
            <i className="fa-solid fa-angle-down" aria-hidden></i>
          </div>
        </div>
      </div>

      <div className="input-group">
        <div className="input-wrapper">
          <p>Associate supplier</p>
          <input type="text" value="Net Solutions Inc." disabled />
        </div>

        <div className="input-wrapper">
          <p>Item description</p>
          <input type="text" value="Memoria RAM 16GB DDR4" disabled />
        </div>
      </div>

      <p>Total ($)</p>
      <input type="text" disabled />

      <div className="bttn-group">
        <button type="button" onClick={() => dispatch(closeModal())}>
          Cancel
        </button>
        <button type="submit">
          <i className="fa-solid fa-plus" aria-hidden></i>
          Add to invoice
        </button>
      </div>
    </form>
  );
}

export default AddToInvoiceContent;
