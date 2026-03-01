import React, { useState } from "react";

const OrderModal = ({ product, onClose, onConfirm }) => {
  const [quantity, setQuantity] = useState(1);
  const [userDetails, setUserDetails] = useState({
    name: "",
    mobile: "",
    city: "",
    address: ""
  });

  const handleConfirm = () => {
    if (!userDetails.name || !userDetails.mobile || !userDetails.city || !userDetails.address) {
      alert("Please fill all details");
      return;
    }

    if (quantity > product.stock) {
      alert("Not enough stock available");
      return;
    }

    const newOrder = {
      id: Date.now(),
      productId: product.id,
      productName: product.name,
      price: product.price,
      quantity,
      total: product.price * quantity,
      ...userDetails,
      status: "Pending"
    };

    onConfirm(newOrder, quantity);
  };

  return (
    <div className="custom-modal">
      <div className="modal-box">
        <div className="modal-header-custom">
          <h5>Checkout</h5>
          <button onClick={onClose}>✖</button>
        </div>

        <div className="modal-body-custom">
          <div className="row">
            <div className="col-md-5 border-end">
              <img src={product.image} alt={product.name} className="img-fluid rounded mb-3" />
              <h5>{product.name}</h5>
              <p>Price: ₹ {product.price}</p>

              <label>Quantity</label>
              <input
                type="number"
                className="form-control mb-3"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />

              <h6 className="text-success">
                Total: ₹ {product.price * quantity}
              </h6>
            </div>

            <div className="col-md-7">
              <h6 className="fw-bold mb-3">Shipping Details</h6>

              <input
                type="text"
                placeholder="Full Name"
                className="form-control mb-3"
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="form-control mb-3"
                value={userDetails.mobile}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, mobile: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="City"
                className="form-control mb-3"
                value={userDetails.city}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, city: e.target.value })
                }
              />

              <textarea
                placeholder="Full Address"
                className="form-control mb-3"
                rows="2"
                value={userDetails.address}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, address: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        <div className="modal-footer-custom">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-success" onClick={handleConfirm}>
            Place Order
          </button>
        </div>
      </div>

      <style>{`
        .custom-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }
        .modal-box {
          width: 800px;
          background: white;
          border-radius: 15px;
          overflow: hidden;
        }
        .modal-header-custom {
          background: #111;
          color: white;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .modal-body-custom {
          padding: 20px;
        }
        .modal-footer-custom {
          padding: 15px 20px;
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

export default OrderModal;