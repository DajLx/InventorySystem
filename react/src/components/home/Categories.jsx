function Categories() {
  const stockCategories = [
    { id: 1, categoryName: "Electronics", productsQuantity: 5 },
    { id: 2, categoryName: "Grosery", productsQuantity: 28 },
  ];

  const displayTableData = (item, index) => {
    const { id, categoryName, productsQuantity } = item;

    return (
      <tr key={index}>
        <th scope="row">{id}</th>
        <td>{categoryName}</td>
        <td>{productsQuantity}</td>
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
          placeholder="Search categories..."
        />
        <button type="button">
          <i className="fa-solid fa-plus" aria-hidden="true"></i>New category
        </button>
      </div>

      <div className="table-wrapper">
        <table>
          <caption>Category Inventory List</caption>

          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category name</th>
              <th scope="col">Products quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>

          <tbody>{stockCategories.map(displayTableData)}</tbody>
        </table>
      </div>
    </>
  );
}

export default Categories;
