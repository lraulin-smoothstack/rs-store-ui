import React from "react";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import ProductForm from "./forms/ProductForm";
import CouponForm from "./forms/CouponForm";
import ProductActions from "../../flux/actions/productActions";
import CouponActions from "../../flux/actions/couponActions";

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    if (this.props.type == "Product") {
      ProductActions.deleteProduct(this.props.id);
    } else if (this.props.type == "Coupon") {
      CouponActions.deleteCoupon(this.props.code);
    }
    // } else if (this.state.type == "User") {
    // } else if (this.state.type == "Order") {
    this.toggle();
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    const label = this.props.buttonLabel;

    let button = "";
    let content = "";
    let modal_title = "";

    if (label === "Delete") {
      button = (
        <Button
          color="danger"
          onClick={this.toggle}
          style={{ float: "left", marginRight: "10px" }}
        >
          {label}
        </Button>
      );
      modal_title = "Delete " + this.props.type;
      content = (
        <React.Fragment>
          <ModalBody>Delete {this.props.type} Forever?</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.handleDelete}>
              Delete
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </React.Fragment>
      );
    } else if (label === "Edit") {
      button = (
        <Button
          color="warning"
          onClick={this.toggle}
          style={{ float: "left", marginRight: "10px" }}
        >
          {label}
        </Button>
      );
      modal_title = "Edit " + this.props.type;
      if (this.props.type == "Product") {
        content = (
          <ModalBody>
            <ProductForm toggle={this.toggle} item={this.props.item} />
          </ModalBody>
        );
      } else if (this.props.type == "Coupon") {
        content = (
          <ModalBody>
            <CouponForm toggle={this.toggle} item={this.props.item} />
          </ModalBody>
        );
      }
    } else {
      button = (
        <Button
          color="success"
          onClick={this.toggle}
          style={{ float: "left", marginRight: "10px" }}
        >
          {label}
        </Button>
      );
      modal_title = "Add New " + this.props.type;
      if (this.props.type === "Product") {
        content = (
          <ModalBody>
            <ProductForm toggle={this.toggle} item={this.props.item} />
          </ModalBody>
        );
      } else if (this.props.type === "Coupon") {
        content = (
          <ModalBody>
            <CouponForm
              toggle={this.toggle}
              item={this.props.item}
              new={true}
            />
          </ModalBody>
        );
      }
    }

    return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            {modal_title}
          </ModalHeader>
          {content}
        </Modal>
      </div>
    );
  }
}

ModalForm.propTypes = {
  item: PropTypes.object,
  buttonLabel: PropTypes.string.isRequired,
  id: PropTypes.number,
  code: PropTypes.string,
  type: PropTypes.string,
};

export default ModalForm;
