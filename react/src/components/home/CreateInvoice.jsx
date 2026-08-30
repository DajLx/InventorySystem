import { useState } from "react";

import ModalLayout from "../ModalLayout";

function CreateInvoice() {
  const [dateValue, setDateValue] = useState("");
  const [statusCheck, setStatusCheck] = useState(false);

  const invoiceItemsStock = [];

  const displayTableData = (it, index) => {
    const { id, item, supplier, amount, price } = it;

    return (
      <tr key={index}>
        <th scope="row">{id}</th>
        <td>
          {item} <span>{supplier}</span>
        </td>
        <td>{amount}</td>
        <td>{price}</td>
        <td>{amount * price}</td>
        <td>{amount * price}</td>
        <td>{amount * price}</td>
        <td>
          <button type="button">
            <i className="fa-regular fa-trash-can" aria-hidden="true"></i>
            <span className="sr-only">delete</span>
          </button>
        </td>
      </tr>
    );
  };

  const setTodayDate = () => {
    const today = new Date().toISOString().split("T")[0];

    setDateValue(today);
  };

  const handleStatusCheck = (e) => {
    const status = e.target.getAttribute("data-status");

    setStatusCheck(statusCheck != status ? status : false);
  };

  return (
    <>
      <div className="invoice-costumer-wrapper">
        <h3>Customer details</h3>

        <div className="invoice-element invoice-element--left">
          <div className="input-wrapper">
            <label htmlFor="search-customer-bar">
              <i className="fa-regular fa-user" aria-hidden="true"></i>
              <span className="sr-only">Search customer</span>
            </label>

            <input
              type="text"
              name="search-customer-bar"
              id="search-customer-bar"
              placeholder="Search customer"
            />

            <label htmlFor="search-customer-bttn">
              <i className="fa-solid fa-angle-down" aria-hidden="true"></i>
              <span className="sr-only">open customer list</span>
            </label>
          </div>

          <button type="button">
            <i className="fa-solid fa-plus" aria-hidden="true"></i>
            Add new customer
          </button>

          <button type="button">
            <i className="fa-solid fa-plus" aria-hidden="true"></i>
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

          <div className="invoice-status-wrapper">
            <h3>Status</h3>

            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                name="paid-status-check"
                id="paid-status-check"
                data-status="paid"
                checked={statusCheck == "paid" ? true : false}
                onChange={handleStatusCheck}
              />
              <label htmlFor="paid-status-check">Paid</label>
            </div>

            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                name="pending-status-check"
                id="pending-status-check"
                data-status="pending"
                checked={statusCheck == "pending" ? true : false}
                onChange={handleStatusCheck}
              />
              <label htmlFor="pending-status-check">Pending</label>
            </div>
          </div>
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

          <tbody>{invoiceItemsStock.map(displayTableData)}</tbody>

          <tfoot>
            <tr>
              <td colSpan={4} className="text-right">
                <strong>Subtotal ($):</strong>
              </td>
              <td scope="col">00</td>
              <td scope="col">00</td>
              <td scope="col">00</td>
            </tr>

            <tr>
              <td colSpan={6} className="text-right">
                <strong>Grand total ($):</strong>
              </td>
              <td>
                <strong>00</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <ModalLayout />
    </>
  );
}

export default CreateInvoice;
