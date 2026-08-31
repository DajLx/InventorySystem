function Suppliers() {
  const stockSuppliers = [
    {
      id: 1,
      supplierName: "TechDist Inc.",
      contact: "JuanGarcia",
      phone: "+34 912 345 678",
      email: "contact@techdist.es",
    },
    {
      id: 2,
      supplierName: "Pantallas Global",
      contact: "María Gomez",
      phone: "+34 931 000 111",
      email: "support@pantallasglobal",
    },
  ];

  const displayTableData = (item, index) => {
    const { id, supplierName, contact, phone, email } = item;

    return (
      <tr key={index}>
        <th scope="row">{id}</th>
        <td>{supplierName}</td>
        <td>{contact}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>
          <button type="button">
            <i className="fa-regular fa-pen-to-square" aria-hidden="true"></i>
            Edit
          </button>
          <button type="button">
            <i className="fa-regular fa-trash-can" aria-hidden="true"></i>
            <span className="sr-only">delete</span>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="input-group">
        <input
          type="text"
          name="search-bar"
          placeholder="Search suppliers..."
        />
        <button type="button">
          <i className="fa-solid fa-plus" aria-hidden="true"></i>New supplier
        </button>
      </div>

      <div className="table-wrapper">
        <table>
          <caption>List of Suppliers</caption>

          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Supplier name</th>
              <th scope="col">Contact</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>

          <tbody>{stockSuppliers.map(displayTableData)}</tbody>
        </table>
      </div>
    </>
  );
}

export default Suppliers;
