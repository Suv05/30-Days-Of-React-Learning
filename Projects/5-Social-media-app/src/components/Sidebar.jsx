import { VscThreeBars } from "react-icons/vsc";
function Sidebar({ selectTab, setSelectTab }) {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary bg-dark"
      style={{ width: "280px",minHeight: "600px"}}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4"><VscThreeBars /></span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link link-body-emphasis ${
              selectTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            setSelectTab("Create Post");
          }}
        >
          <a
            href="#"
            className={`nav-link link-body-emphasis ${
              selectTab === "Create Post" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>Amsuv</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
