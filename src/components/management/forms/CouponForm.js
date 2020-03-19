import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const CouponActions = () => console.log("Not implimented");

class CouponForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
      expiration_date: "",
      discount: 0,
      errors: {
        code: "",
        expiration_date: "",
        discount: "",
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
    let value = target.value;

    switch (target.name) {
      case "code":
        errors.code =
          value.length < 3 ? "Discount must be > 3 characters long!" : "";
        break;
      case "discount":
        errors.discount =
          value < 0 || value > 1 ? "Discount must be between 0 and 1!" : "";
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
    let coupon = {
      code: this.state.code,
      expiration_date: this.state.expiration_date,
      discount: this.state.discount,
    };
    this.props.toggle();
    CouponActions.createCoupon(coupon);
  }

  handleUpdate() {
    let coupon = {
      code: this.state.code,
      expiration_date: this.state.expiration_date,
      discount: this.state.discount,
    };
    this.props.toggle();
    CouponActions.updateCoupon(coupon);
  }

  componentDidMount() {
    if (this.props.item) {
      const { code, expiration_date, discount } = this.props.item;
      this.setState({
        code,
        expiration_date,
        discount,
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
            name="code"
            id="code"
            onChange={this.handleInputChange}
            value={this.state.code === null ? "" : this.state.code}
          />
          {this.state.code.length > 0 && (
            <span className="error">{errors.code}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label>Expiration Date</Label>
          <Input
            type="text"
            name="expiration_date"
            id="expiration_date"
            onChange={this.handleInputChange}
            value={
              this.state.expiration_date === null
                ? ""
                : this.state.expiration_date
            }
          />
        </FormGroup>
        <FormGroup>
          <Label>Discount</Label>
          <Input
            type="text"
            name="discount"
            id="discount"
            onChange={this.handleInputChange}
            value={this.state.discount === null ? "" : this.state.discount}
          />
          {this.state.discount != undefined && (
            <span className="error">{errors.discount}</span>
          )}
        </FormGroup>
        <Button
          color="primary"
          onClick={
            this.props.new == true ? this.handleCreate : this.handleUpdate
          }
          disabled={this.state.submitDisabled}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

CouponForm.propTypes = {
  toggle: PropTypes.func,
  type: PropTypes.string,
  item: PropTypes.object,
  new: PropTypes.bool,
};

export default CouponForm;
