import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faChevronDown,
  faCalendarCheck,
  faUserGroup,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
const propertyImg = require("../assets/img/property.png");

const PageOne = () => {
  return (
    <div className="pageone">
      <div className="pageone--container">
      <div className="pageone--header-info">
        <div className="pageone--header-info-text">
          <div className="pageone--property-details-text">
            <h1>Property details</h1>
            <p className="property--details-subtitle">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              sequi beatae, nulla laboriosam architecto aspernatur aliquid.
            </p>
          </div>
          <div className="pageone--property-name-details">
            <label className="pageone--property-name-header" htmlFor="">
              Property Name
            </label>
            <input type="text" className="pageone--property-inputname" />
          </div>
          <div className="pageone--property-address-details">
            <label className="pageone--property-name-header" htmlFor="">
              Address
            </label>
            <input
              type="text"
              className="pageone--property-inputaddress"
              placeholder="21 Jump Street, Los Angeles, California"
            />
          </div>
        </div>
        <div className="pageone--image">
          <img src={propertyImg} alt="property" />
        </div>
      </div>
      <div className="pageone--property-type">
        <label htmlFor="">Property Type</label>
        <div className="pageone--property-type-buttons">
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8 24H29V15H17V24H25.8ZM20.2 16.8165H25.8V22.1835H20.2V16.8165Z"
                fill="#35344C"
              />
              <path
                d="M28.7299 12.528L15.998 1.10934C15.6109 0.761337 15.0926 0.548004 14.5222 0.548004C13.9205 0.548004 13.3747 0.785337 12.9808 1.17067L0.670197 13.172V30H7.85061V20H11.9537V30H29.3918V13.1227L28.7299 12.528ZM27.3403 28H14.0052V18H5.79906V28H2.72174V14L14.4306 2.58534C14.4539 2.56267 14.4853 2.54934 14.5209 2.54934C14.5551 2.54934 14.5852 2.56134 14.6084 2.58267L27.3403 14.0013V28Z"
                fill="#35344C"
              />
            </svg>
            Single Family
          </button>
          <button>
            <svg
              width="24"
              height="22"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7501 29V1H5.15736V29H1.56715V31H32.3404V29H28.7501ZM26.6986 29H17.9795V25H15.928V29H7.20891V3H26.6986V29Z"
                fill="#35344C"
              />
              <path d="M10.7991 19H12.8507V21H10.7991V19Z" fill="#35344C" />
              <path d="M15.928 19H17.9795V21H15.928V19Z" fill="#35344C" />
              <path d="M21.0569 19H23.1084V21H21.0569V19Z" fill="#35344C" />
              <path d="M10.7991 13H12.8507V15H10.7991V13Z" fill="#35344C" />
              <path d="M15.928 13H17.9795V15H15.928V13Z" fill="#35344C" />
              <path d="M21.0569 13H23.1084V15H21.0569V13Z" fill="#35344C" />
              <path d="M10.7991 7H12.8507V9H10.7991V7Z" fill="#35344C" />
              <path d="M15.928 7H17.9795V9H15.928V7Z" fill="#35344C" />
              <path d="M21.0569 7H23.1084V9H21.0569V7Z" fill="#35344C" />
            </svg>
            Multi-Family
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8 24H29V15H17V24H25.8ZM20.2 16.8165H25.8V22.1835H20.2V16.8165Z"
                fill="#35344C"
              />
              <path
                d="M28.7299 12.528L15.998 1.10934C15.6109 0.761337 15.0926 0.548004 14.5222 0.548004C13.9205 0.548004 13.3747 0.785337 12.9808 1.17067L0.670197 13.172V30H7.85061V20H11.9537V30H29.3918V13.1227L28.7299 12.528ZM27.3403 28H14.0052V18H5.79906V28H2.72174V14L14.4306 2.58534C14.4539 2.56267 14.4853 2.54934 14.5209 2.54934C14.5551 2.54934 14.5852 2.56134 14.6084 2.58267L27.3403 14.0013V28Z"
                fill="#35344C"
              />
            </svg>
            Townhome
          </button>
          <button>
            <svg
              width="24"
              height="22"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7501 29V1H5.15736V29H1.56715V31H32.3404V29H28.7501ZM26.6986 29H17.9795V25H15.928V29H7.20891V3H26.6986V29Z"
                fill="#35344C"
              />
              <path d="M10.7991 19H12.8507V21H10.7991V19Z" fill="#35344C" />
              <path d="M15.928 19H17.9795V21H15.928V19Z" fill="#35344C" />
              <path d="M21.0569 19H23.1084V21H21.0569V19Z" fill="#35344C" />
              <path d="M10.7991 13H12.8507V15H10.7991V13Z" fill="#35344C" />
              <path d="M15.928 13H17.9795V15H15.928V13Z" fill="#35344C" />
              <path d="M21.0569 13H23.1084V15H21.0569V13Z" fill="#35344C" />
              <path d="M10.7991 7H12.8507V9H10.7991V7Z" fill="#35344C" />
              <path d="M15.928 7H17.9795V9H15.928V7Z" fill="#35344C" />
              <path d="M21.0569 7H23.1084V9H21.0569V7Z" fill="#35344C" />
            </svg>
            Condo
          </button>
        </div>
      </div>
      <div className="pageone--unit-info">
        <label htmlFor="">Unit Info</label>
        <div className="pageone--unit-info-card">
          <div className="pageone--unit-info-top">
            <div className="pageone--unit-info-name">
              <label htmlFor="">Unit Name</label>
              <input type="text" placeholder="Name and/or number" />
            </div>
            <div className="pageone--unit-info-rent">
              <label htmlFor="">Rent</label>
              {/* <i className="fa-light fa-dollar-sign"></i> */}
              <input type="text" />
              <FontAwesomeIcon icon={faDollarSign} className="input-icon" />
              <span className="per-month"></span>
            </div>
            <div className="pageone--unit-info-deposit">
              <label htmlFor="">Deposit</label>
              <input type="text" />
              <FontAwesomeIcon icon={faDollarSign} className="input-icon" />
              <span className="per-month"></span>
            </div>
            <div className="pageone--unit-info-lease">
              <label htmlFor="">Lease Length (months)</label>
              <input type="text" placeholder="12" />
            </div>
          </div>
          <div className="pageone--unit-info-bottom">
            <div className="pageone--unit-info-beds">
              <label htmlFor="">Beds</label>
              <input type="text" placeholder="Select" />
              <FontAwesomeIcon icon={faBed} className="input-icon" />
              <FontAwesomeIcon icon={faChevronDown} className="arrow-down" />
            </div>
            <div className="pageone--unit-info-baths">
              <label htmlFor="">Baths</label>
              <input type="text" placeholder="12" />
              <FontAwesomeIcon icon={faBath} className="input-icon" />
              <FontAwesomeIcon icon={faChevronDown} className="arrow-down" />
            </div>
            <div className="pageone--unit-square-feet">
              <label htmlFor="">Sq. Ft.</label>
              <input type="text" placeholder="12" />
            </div>
            <div className="pageone--unit-info-availability">
              <label htmlFor="">Available on</label>
              <input type="date" />
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className="input-icon-calendar"
              />
            </div>
            <div className="pageone--unit-info-vacancy">
              <label htmlFor="">Vacancy</label>
              <input type="text" placeholder="Select" />
              <FontAwesomeIcon icon={faUserGroup} className="input-icon" />
              <FontAwesomeIcon icon={faChevronDown} className="arrow-down" />
            </div>
          </div>
        </div>
      </div>
      <div className="navigation--buttons">
        <button><a href="/#">back</a></button>
        <button><a href="/#">continue</a></button>
      </div>
      </div>
    </div>
  );
};

export default PageOne;
