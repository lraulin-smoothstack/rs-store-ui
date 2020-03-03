import React from "react";
import PropTypes from "prop-types";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import { connect } from "react-redux";
import { setDepartment } from "../actions";
import { getDepartment, getTotalItems } from "../reducers";

const FilterContainer = ({
  department,
  totalItems,
  searchString,
  dispatch,
}) => {
  const MEN = "Men";
  const WOMEN = "Women";
  const KIDS = "Kids";
  const departmentTitle = { Men: "Men's", Women: "Women's", Kids: "Kids'" };
  const onSelectDepartment = department => {
    console.log("onSelectDepartment");
    setDepartment(department)(dispatch);
  };

  return (
    <>
      <DropdownButton
        id="dropdown-item-button"
        title={department ? departmentTitle[department] : "All Departments"}
      >
        <Dropdown.Item as="button" onSelect={() => onSelectDepartment(null)}>
          All Departments
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onSelectDepartment(MEN)}>
          {departmentTitle[MEN]}
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onSelectDepartment(WOMEN)}>
          {departmentTitle[WOMEN]}
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => onSelectDepartment(KIDS)}>
          {departmentTitle[KIDS]}
        </Dropdown.Item>
      </DropdownButton>
      <Form inline>
        {/* <Button
    active={department === "mens"}
    onClick={() => onSelectDepartment("mens")}
  >
    Men's
  </Button>
  <Button
    active={department === "womens"}
    onClick={() => onSelectDepartment("womens")}
  >
    Women's
  </Button>
  <Button
    active={department === "kids"}
    onClick={() => onSelectDepartment("kids")}
  >
    Kid's
  </Button> */}
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
      <Button>
        <FontAwesomeIcon icon={faShoppingCart} />
        <Badge pill>{totalItems}</Badge>
      </Button>
    </>
  );
};

// FilterContainer.propTypes = {
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       photo_url: PropTypes.string.isRequired,
//       retail_price_cents: PropTypes.number.isRequired,
//       stock: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
//   addToCart: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  department: getDepartment(state),
  totalItems: getTotalItems(state),
});

export default connect(mapStateToProps)(FilterContainer);
