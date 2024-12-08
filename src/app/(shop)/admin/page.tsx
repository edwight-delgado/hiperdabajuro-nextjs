export default function () {
  return (
    <div className="container">
      <div
        id="shoptab"
        className="grid grid-cols-12 gap-y-5 lg:gap-y-0 gap-x-5"
      >
        <div className="col-span-12 lg:col-span-4">
          <ul className="shop-tab-nav account-nav flex flex-wrap flex-col">
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="#dashboad"
              >
                dashboad
              </a>
            </li>
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="#orders"
              >
                orders
              </a>
            </li>
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="#download"
              >
                download
              </a>
            </li>
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="#payment-method"
              >
                payment method
              </a>
            </li>
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="#address"
              >
                address
              </a>
            </li>
            <li className="active">
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-gray-600 block"
                href="#account"
              >
                {" "}
                Account Details
              </a>
            </li>
            <li>
              <a
                className="font-medium py-4 px-5 leading-none uppercase transition-all hover:text-white hover:bg-orange  text-base border-t border-l border-r border-b border-gray-600 block"
                href="login-register.html"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div>
            <div id="dashboad" className="shop-tab-content">
              <div className="p-8 border border-gray-600">
                <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
                  Dashboard
                </h3>
                <p>
                  Hello, <strong>Alex Tuntuni</strong> (If Not
                  <strong>Tuntuni ! </strong>
                  <a
                    href="login-register.html"
                    className="transition-all hover:text-orange"
                  >
                    Logout
                  </a>
                  )
                </p>
                <p>
                  From your account dashboard. you can easily check &amp; view
                  your recent orders, manage your shipping and billing addresses
                  and edit your password and account details.
                </p>
              </div>
            </div>
            <div id="orders" className="shop-tab-content">
              <div className="p-8 border border-gray-600">
                <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
                  Orders
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-max">
                    <thead>
                      <tr>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          No
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Name
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Date
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Status
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Total
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          1
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Mostarizing Oil
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Aug 22, 2018
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Pending
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          $45
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          <a
                            href="shopping-cart.html"
                            className="ht-btn black-btn"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          2
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Katopeno Altuni
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          July 22, 2018
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Approved
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          $100
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          <a
                            href="shopping-cart.html"
                            className="ht-btn black-btn"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          3
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Murikhete Paris
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          June 12, 2017
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          On Hold
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          $99
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          <a
                            href="shopping-cart.html"
                            className="ht-btn black-btn"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div id="download" className="shop-tab-content">
              <div className="p-8 border border-gray-600">
                <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
                  Downloads
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-max">
                    <thead>
                      <tr>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Product
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Date
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Expire
                        </th>
                        <th className="bg-gray-light text-center border border-solid border-gray-600 p-3 font-semibold text-base">
                          Download
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Mostarizing Oil
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Aug 22, 2018
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Yes
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          <a href="#" className="ht-btn black-btn">
                            Download File
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Katopeno Altuni
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Sep 12, 2018
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          Never
                        </td>
                        <td className="text-center border border-solid border-gray-600 py-5 px-3 align-middle">
                          <a href="#" className="ht-btn black-btn">
                            Download File
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div id="payment-method" className="shop-tab-content">
              <div className="p-8 border border-gray-600">
                <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
                  Payment Method
                </h3>
                <p className="font-medium p-4">
                  You Can't Saved Your Payment Method yet.{" "}
                </p>
              </div>
            </div>
            <div id="address" className="shop-tab-content">
              <div className="p-8 border border-gray-600">
                <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
                  Billing Address
                </h3>

                <address className="not-italic">
                  <p>
                    <strong>Alex Tuntuni</strong>
                  </p>
                  <p>
                    1355 Market St, Suite 900 <br />
                    San Francisco, CA 94103
                  </p>
                  <p>Mobile: (123) 456-7890</p>
                </address>

                <a href="#" className="transition-all hover:text-orange">
                  Edit Address
                </a>
              </div>
            </div>
            <div id="account" className="shop-tab-content active">
              <div className="p-8 border border-gray-600">
                <h3 className="font-semibold text-md lg:text-lg capitalize pb-5 mb-5 border-b border-gray-600 leading-none">
                  Account Details
                </h3>
                <form action="#">
                  <div className="grid grid-cols-12 gap-x-5">
                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="first-name"
                        placeholder="First Name"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="last-name"
                        placeholder="Last Name"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="display-name"
                        placeholder="Display Name"
                        type="text"
                      />
                    </div>

                    <div className="col-span-12 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="email"
                        placeholder="Email Address"
                        type="email"
                      />
                    </div>

                    <div className="col-span-12 mb-5">
                      <h4 className="font-semibold text-base capitalize">
                        Password change
                      </h4>
                    </div>

                    <div className="col-span-12 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="current-pwd"
                        placeholder="Current Password"
                        type="password"
                      />
                    </div>

                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="new-pwd"
                        placeholder="New Password"
                        type="password"
                      />
                    </div>

                    <div className="col-span-12 lg:col-span-6 mb-5">
                      <input
                        className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base"
                        id="confirm-pwd"
                        placeholder="Confirm Password"
                        type="password"
                      />
                    </div>

                    <div className="col-span-12">
                      <button
                        className="inline-block leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange"
                        aria-label="Save Changes"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
