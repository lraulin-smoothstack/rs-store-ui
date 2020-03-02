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
import { connect } from "react-redux";
import { setDepartment } from "../actions";
import { getDepartment, getSearchString } from "../reducers/filter";

const FilterContainer = ({ department, searchString }) => {
  const departmentTitle = { mens: "Men's", womens: "Women's", kids: "Kid's" };
  const setDepartment = department => {
    //
  };

  return (
    <>
      <DropdownButton
        id="dropdown-item-button"
        title={department ? departmentTitle[department] : "All Departments"}
      >
        <Dropdown.Item as="button" onSelect={() => setDepartment(null)}>
          All Departments
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => setDepartment("mens")}>
          {departmentTitle["mens"]}
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => setDepartment("womens")}>
          {departmentTitle["womens"]}
        </Dropdown.Item>
        <Dropdown.Item as="button" onSelect={() => setDepartment("kids")}>
          {departmentTitle["kids"]}
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
  searchString: getSearchString(state),
});

export default connect(mapStateToProps, { setDepartment })(FilterContainer);
