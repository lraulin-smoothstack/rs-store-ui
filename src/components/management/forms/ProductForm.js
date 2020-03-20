import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const ProductActions = () => console.log("Not implimented");

class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      description: "",
      category: "",
      department: "",
      photo_url: "",
      wholesale_price_cents: 0,
      retail_price_cents: 0,
      discountable: false,
      stock: 0,
      deleted: false,
      errors: {
        name: "",
        stock: "",
        wholesale_price_cents: "",
        retail_price_cents: "",
      },
      submitDisabled: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    let errors = this.state.errors;
    let value;

    if (target.name === "deleted" || target.name === "discountable") {
      value = target.checked;
    } else {
      value = target.value;
    }

    switch (target.name) {
      case "name":
        errors.name =
          value.length < 3 ? "Name must be > 3 characters long!" : "";
        break;
      case "stock":
        errors.stock = value < 0 ? "Stock must be >= 0!" : "";
        break;
      case "wholesale_price_cents":
        errors.wholesale_price_cents =
          value < 0 ? "Wholsale Price must be >= 0!" : "";
        break;
      case "retail_price_cents":
        errors.retail_price_cents =
          value < 0 ? "Retail Price must be >= 0!" : "";
        break;
      default:
        break;
    }

    let submitDisabled = false;
    Object.values(errors).forEach(
      val => val.length > 0 && (submitDisabled = true),
    );

    this.setState({
      errors,
      submitDisabled,
      [target.name]: value,
    });
  }

  handleCreate() {
    let product = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      department: this.state.department,
      photo_url: this.state.photo_url,
      wholesale_price_cents: this.state.wholesale_price_cents,
      retail_price_cents: this.state.retail_price_cents,
      discountable: this.state.discountable,
      stock: this.state.stock,
      deleted: this.state.deleted,
    };
    this.props.toggle();
    ProductActions.createProduct(product);
  }

  handleUpdate() {
    let product = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      department: this.state.department,
      photo_url: this.state.photo_url,
      wholesale_price_cents: this.state.wholesale_price_cents,
      retail_price_cents: this.state.retail_price_cents,
      discountable: this.state.discountable,
      stock: this.state.stock,
      deleted: this.state.deleted,
    };
    this.props.toggle();
    ProductActions.updateProduct(product);
  }

  componentDidMount() {
    if (this.props.item) {
      const {
        id,
        name,
        description,
        category,
        department,
        photo_url,
        wholesale_price_cents,
        retail_price_cents,
        discountable,
        stock,
        deleted,
      } = this.props.item;
      this.setState({
        id,
        name,
        description,
        category,
        department,
        photo_url,
        wholesale_price_cents,
        retail_price_cents,
        discountable,
        stock,
        deleted,
      });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={this.handleInputChange}
            value={this.state.name === null ? "" : this.state.name}
          />
          {this.state.name.length > 0 && (
            <span className="error">{errors.name}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            onChange={this.handleInputChange}
            value={
              this.state.description === null ? "" : this.state.description
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Department</Label>
          <Input
            type="select"
            name="department"
            id="department"
            onChange={this.handleInputChange}
            value={this.state.department === null ? "" : this.state.department}
          >
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Category</Label>
          <Input
            type="text"
            name="category"
            id="category"
            onChange={this.handleInputChange}
            value={this.state.category === null ? "" : this.state.category}
          />
        </FormGroup>
        <FormGroup>
          <Label>Photo URL</Label>
          <Input
            type="text"
            name="photo_url"
            id="photo_url"
            onChange={this.handleInputChange}
            value={this.state.photo_url === null ? "" : this.state.photo_url}
          />
        </FormGroup>
        <FormGroup>
          <Label>Wholesale Price (Cents)</Label>
          <Input
            type="text"
            name="wholesale_price_cents"
            id="wholesale_price_cents"
            onChange={this.handleInputChange}
            value={
              this.state.wholesale_price_cents === null
                ? ""
                : this.state.wholesale_price_cents
            }
          />
          {this.state.wholesale_price_cents !== undefined && (
            <span className="error">{errors.wholesale_price_cents}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Retail Price (Cents)</Label>
          <Input
            type="text"
            name="retail_price_cents"
            id="retail_price_cents"
            onChange={this.handleInputChange}
            value={
              this.state.retail_price_cents === null
                ? ""
                : this.state.retail_price_cents
            }
          />
          {this.state.retail_price_cents !== undefined && (
            <span className="error">{errors.retail_price_cents}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Stock</Label>
          <Input
            type="text"
            name="stock"
            id="stock"
            onChange={this.handleInputChange}
            value={this.state.stock === null ? "" : this.state.stock}
          />
          {this.state.stock !== undefined && (
            <span className="error">{errors.stock}</span>
          )}
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="discountable"
              id="discountable"
              onChange={this.handleInputChange}
              checked={this.state.discountable}
            />
            Discountable
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              name="deleted"
              id="deleted"
              onChange={this.handleInputChange}
              checked={this.state.deleted}
            />
            Deleted
          </Label>
        </FormGroup>
        <br />
        <Button
          color="primary"
          onClick={this.state.id === 0 ? this.handleCreate : this.handleUpdate}
          disabled={this.state.submitDisabled}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

ProductForm.propTypes = {
  toggle: PropTypes.func,
  type: PropTypes.string,
  item: PropTypes.object,
};

export default ProductForm;
