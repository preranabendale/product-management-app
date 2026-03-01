import React from "react";

const DeleteConfirmModal = ({ product, onConfirm, onClose }) => {

  const handleDelete = () => {
    onConfirm(); // call parent delete function
    onClose();   // close the modal
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          width: "300px",
          borderRadius: "8px",
          textAlign: "center"
        }}
      >
        <h5>Are you sure?</h5>
        <p>Delete {product.name}?</p>

        <button className="btn btn-danger me-2" onClick={handleDelete}>
          Yes, Delete
        </button>
        <button className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;