function Products() {
  const productStock = [
    {
      id: 101,
      name: "Wireless Mouse",
      category: "Electronics",
      stock: 45,
      price: 29.0,
    },
    {
      id: 101,
      name: "Mechanical Keyboard",
      category: "Electronics",
      stock: 21,
      price: 89.99,
    },
  ];

  const displayTableData = (item, index) => {
    const { id, name, category, stock, price } = item;

    return (
      <tr key={index}>
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{category}</td>
        <td>{stock}</td>
        <td>{price}</td>
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
        <input type="text" name="search-bar" placeholder="Search products..." />
        <button type="button">
          <i className="fa-solid fa-plus" aria-hidden="true"></i>New product
        </button>
      </div>

      <div className="table-wrapper">
        <table>
          <caption>Product Inventory List</caption>

          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>{productStock.map(displayTableData)}</tbody>
        </table>
      </div>

      <div className="card-footer">
        <p>{"Note: Low stock (< 5) is highlighted in red."}</p>
      </div>
    </>
  );
}

export default Products;
