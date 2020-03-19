import Dispatcher from "../dispatcher/appDispatcher";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

let _productStore = {
  product: {
    productList: [],
    readState: {
      pending: false,
      success: false,
      failure: false
    },
    createState: {
      pending: false,
      success: false,
      failure: false
    },
    updateState: {
      pending: false,
      success: false,
      failure: false
    },
    deleteState: {
      pending: false,
      success: false,
      failure: false
    },
    error: ""
  }
};

class ProductStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getAllProducts() {
    return _productStore.product;
  }

  resetCreateState() {
    _productStore.product.createState = {
      pending: false,
      success: false,
      failure: false
    };
  }

  resetReadState() {
    _productStore.product.readState = {
      pending: false,
      success: false,
      failure: false
    };
  }

  resetUpdateState() {
    _productStore.product.updateState = {
      pending: false,
      success: false,
      failure: false
    };
  }

  resetDeleteState() {
    _productStore.product.deleteState = {
      pending: false,
      success: false,
      failure: false
    };
  }
}

const ProductStore = new ProductStoreClass();

Dispatcher.register(action => {
  switch (action.actionType) {
    //Create Product Cases
    case "create_products_successful": {
      ProductStore.resetCreateState();

      const product = action.data;
      const productList = _productStore.product.productList;
      productList.push(product);
      _productStore.product.productList = productList;

      _productStore.product.createState.success = true;
      ProductStore.emitChange();
      break;
    }
    case "create_products_failure": {
      ProductStore.resetCreateState();
      _productStore.product.createState.failure = true;
      ProductStore.emitChange();
      break;
    }
    case "create_products_started": {
      ProductStore.resetCreateState();
      _productStore.product.createState.pending = true;
      ProductStore.emitChange();
      break;
    }

    //Read Products Cases
    case "read_products_successful": {
      ProductStore.resetReadState();
      _productStore.product.productList = action.data;
      _productStore.product.readState.success = true;
      ProductStore.emitChange();
      break;
    }
    case "read_products_failure": {
      ProductStore.resetReadState();
      _productStore.product.readState.failure = true;
      ProductStore.emitChange();
      break;
    }
    case "read_products_started": {
      ProductStore.resetReadState();
      _productStore.product.readState.pending = true;
      ProductStore.emitChange();
      break;
    }

    //Update Products Cases
    case "update_products_successful": {
      ProductStore.resetUpdateState();

      const product = action.data;
      const productList = _productStore.product.productList;
      const index = productList.findIndex(
        ({ id }) => id === product.id
      );
      productList[index] = product;

      _productStore.product.productList = productList;
      _productStore.product.updateState.success = true;
      ProductStore.emitChange();
      break;
    }
    case "update_products_failure": {
      ProductStore.resetUpdateState();
      _productStore.product.updateState.failure = true;
      ProductStore.emitChange();
      break;
    }
    case "update_products_started": {
      ProductStore.resetUpdateState();
      _productStore.product.updateState.pending = true;
      ProductStore.emitChange();
      break;
    }

    //Delete Products Cases
    case "delete_products_successful": {
      ProductStore.resetDeleteState();
      const delete_id = action.data;
      const productList = _productStore.product.productList;

      _productStore.product.productList = productList.filter(
        ({ id }) => id !== delete_id
      );
      _productStore.product.deleteState.success = true;
      ProductStore.emitChange();
      break;
    }
    case "delete_products_failure": {
      ProductStore.resetDeleteState();
      _productStore.product.deleteState.failure = true;
      ProductStore.emitChange();
      break;
    }
    case "delete_products_started": {
      ProductStore.resetDeleteState();
      _productStore.product.deleteState.pending = true;
      ProductStore.emitChange();
      break;
    }
    default:
      return;
  }
});

export default ProductStore;
