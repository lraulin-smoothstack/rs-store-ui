import React, { createRef, useState } from "react";
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
import { setDepartment, setSearchString } from "../actions";
import { getDepartment, getSearchString, getTotalItems } from "../reducers";

const FilterContainer = ({
  department,
  totalItems,
  searchString,
  dispatch,
  setDepartment,
  setSearchString,
}) => {
  // const [textInput, setTextInput] = useState("");

  const MEN = "Men";
  const WOMEN = "Women";
  const KIDS = "Kids";
  const departmentTitle = { Men: "Men's", Women: "Women's", Kids: "Kids'" };

  const [textInput, setTextInput] = useState("");

  const onSelectDepartment = department => setDepartment(department);

  const reset = () => {
    console.log("*** RESET ***");
    setSearchString(null);
    setTextInput("");
  };

  const handleSubmitSearch = event => {
    console.log("*** Handle Submit Search ***");
    event.preventDefault();
    event.stopPropagation();
    setSearchString(textInput);
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
      <Form inline onSubmit={handleSubmitSearch}>
        <FormControl
          id="search"
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={textInput}
          onChange={event => setTextInput(event.target.value)}
        />
        {searchString ? (
          <Button variant="outline-danger" onClick={() => reset()}>
            Reset
          </Button>
        ) : (
          <Button variant="outline-light" type="submit">
            Search
          </Button>
        )}
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
  searchString: getSearchString(state),
  totalItems: getTotalItems(state),
});

const mapDispatchToProps = { setDepartment, setSearchString };

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
