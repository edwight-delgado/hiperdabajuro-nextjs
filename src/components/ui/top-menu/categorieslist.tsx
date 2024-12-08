function CategoryList() {
  return (
    <>
      <div className="d-block d-lg-none mb-4">
        <a
          role="button"
          href=""
          className="w-100 d-flex justify-content-center align-items-center btn btn-primary"
        >
          <span className="me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </span>
          All Departments
        </a>
        <div id="collapseExample" className="mt-2 collapse">
          <div className="card">
            <div className="card-body">
              <ul className="mb-0 list-unstyled">
                <li className="dropdown-item">Dairy, Bread &amp; Eggs</li>
                <li className="dropdown-item">Snacks &amp; Munchies</li>
                <li className="dropdown-item">Fruits &amp; Vegetables</li>
                <li className="dropdown-item">Cold Drinks &amp; Juices</li>
                <li className="dropdown-item">Breakfast &amp; Instant Food</li>
                <li className="dropdown-item">Bakery &amp; Biscuits</li>
                <li className="dropdown-item">Chicken, Meat &amp; Fish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="me-3 d-none d-lg-block dropdown">
        <button
          type="button"
          id="dropdownMenuButton1"
          className="px-6 btn btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="me-1"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>{" "}
          All Departments
        </button>
        <div
          data-bs-popper="static"
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
        >
          <a
            href="#"
            data-rr-ui-dropdown-item=""
            className="dropdown-item"
            role="button"
          >
            Dairy, Bread &amp; Eggs
          </a>
          <a
            href="#"
            data-rr-ui-dropdown-item=""
            className="dropdown-item"
            role="button"
          >
            Snacks &amp; Munchies
          </a>
          <a
            href="#"
            data-rr-ui-dropdown-item=""
            className="dropdown-item"
            role="button"
          >
            Fruits &amp; Vegetables
          </a>
          <a
            href="#"
            data-rr-ui-dropdown-item=""
            className="dropdown-item"
            role="button"
          >
            Cold Drinks &amp; Juices
          </a>
          <a
            href="#"
            data-rr-ui-dropdown-item=""
            className="dropdown-item"
            role="button"
          >
            Breakfast &amp; Instant Food
          </a>
          <a
            href="#"
            data-rr-ui-dropdown-item=""
            className="dropdown-item"
            role="button"
          >
            Bakery &amp; Biscuits
          </a>
          <a
            href="#"
            data-rr-ui-dropdown-item=""
            className="dropdown-item"
            role="button"
          >
            Chicken, Meat &amp; Fish
          </a>
        </div>
      </div>
    </>
  );
}
