import { useState } from "react";
import { useDispatch } from "react-redux";

import { openModal } from "../../features/modal/modalSlice";

import { MODAL_TYPES } from "../../constants/modalTypes";

const invoiceItemsStock = [
  {
    id: "12RD",
    item: "Magazine",
    supplier: "Magazines Express",
    qty: 5,
    price: 5.0,
  },
  {
    id: "70MV",
    item: "RMD High Definition",
    supplier: "Fast Components",
    qty: 2,
    price: 7.0,
  },
  {
    id: "RA14",
    item: "Mouse pads",
    supplier: "Thank u computa Inc.",
    qty: 9,
    price: 2.5,
  },
];

function CreateInvoice() {
  const [dateValue, setDateValue] = useState("");

  const dispatch = useDispatch();

  const totals = invoiceItemsStock.reduce(
    (acc, item) => {
      const itemSubtotal = item.price * item.qty;
      const itemIva = itemSubtotal * 0.16;

      acc.subtotal += itemSubtotal;
      acc.iva += itemIva;
      acc.grandTotal += itemSubtotal + itemIva;

      return acc;
    },
    { subtotal: 0, iva: 0, grandTotal: 0 },
  );

  const setTodayDate = () => {
    const today = new Date().toISOString().split("T")[0];

    setDateValue(today);
  };

  return (
    <>
      <div className="invoice-costumer-wrapper">
        <h3>Customer details</h3>

        <div className="invoice-element invoice-element--left">
          <div className="input-wrapper">
            <label htmlFor="search-customer-bar">
              <i className="fa-regular fa-user" aria-hidden></i>
              <span className="sr-only">Search customer</span>
            </label>

            <input
              type="text"
              name="search-customer-bar"
              id="search-customer-bar"
              placeholder="Search customer"
            />

            <label htmlFor="search-customer-bttn">
              <i className="fa-solid fa-angle-down" aria-hidden></i>
              <span className="sr-only">open customer list</span>
            </label>
          </div>

          <button
            type="button"
            onClick={() =>
              dispatch(openModal({ modalType: MODAL_TYPES.ADD_NEW_CUSTOMER }))
            }
          >
            <i className="fa-solid fa-plus" aria-hidden></i>
            Add new customer
          </button>

          <button
            type="button"
            onClick={() =>
              dispatch(openModal({ modalType: MODAL_TYPES.ADD_TO_INVOICE }))
            }
          >
            <i className="fa-solid fa-plus" aria-hidden></i>
            Add to invoice
          </button>
        </div>

        <div className="invoice-element invoice-element--rigth">
          <div className="invoice-details-wrapper">
            <h3>Invoice details</h3>

            <div className="input-group">
              <div className="input-wrapper">
                <label htmlFor="invoice-id" className="sr-only">
                  Invoice ID
                </label>
                <input
                  type="text"
                  name="invoice-id"
                  id="invoice-id"
                  placeholder="Invoice ID"
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="invoice-date" className="sr-only">
                  Invoice date
                </label>
                <input
                  type="date"
                  name="invoice-date"
                  id="invoice-date"
                  value={dateValue}
                  data-placeholder="Date"
                  className={!dateValue ? "is-empty" : ""}
                  onChange={(e) => setDateValue(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="bttn-today"
                onClick={setTodayDate}
              >
                Today
              </button>
            </div>
          </div>

          <fieldset className="invoice-status-fieldset">
            <legend>Status:</legend>

            <label>
              <input type="radio" name="status" value={"paid"} defaultChecked />
              Paid
            </label>

            <label>
              <input type="radio" name="status" value={"pending"} />
              Pending
            </label>
          </fieldset>
        </div>
      </div>

      <div className="invoice-table-wrapper">
        <table>
          <caption>
            <h3>Invoice items</h3>
          </caption>

          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Item</th>
              <th scope="col">Qty</th>
              <th scope="col">Unit price ($)</th>
              <th scope="col">Subtotal ($)</th>
              <th scope="col">IVA 16%</th>
              <th scope="col">Total ($)</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {invoiceItemsStock.map((it, index) => {
              const itemSubtotal = it.qty * it.price;
              const itemIva = itemSubtotal * 0.16;
              const itemTotal = itemSubtotal + itemIva;

              return (
                <tr key={index}>
                  <th scope="row">{it.id}</th>
                  <td>
                    {it.item} <i>{it.supplier}</i>
                  </td>
                  <td>{it.qty}</td>
                  <td>{it.price.toFixed(2)}</td>
                  <td>{itemSubtotal.toFixed(2)}</td>
                  <td>{itemIva.toFixed(2)}</td>
                  <td>{itemTotal.toFixed(2)}</td>
                  <td>
                    <button type="button">
                      <i
                        className="fa-regular fa-trash-can"
                        aria-hidden="true"
                      ></i>
                      <span className="sr-only">delete</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={4} className="text-right">
                <strong>Summary ($):</strong>
              </td>
              <td scope="col">{totals.subtotal.toFixed(2)}</td>
              <td scope="col">{totals.iva.toFixed(2)}</td>
              <td scope="col">
                <strong>{totals.grandTotal.toFixed(2)}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default CreateInvoice;
