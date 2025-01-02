import React from 'react';
import { toast } from 'react-toastify';

const CancelModal = ({ cancel, setCancel }) => {
  const { _id } = cancel;
  const handleCancel = () => {
    fetch(`https://public-rozella-fatema.koyeb.app/bookings/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Booking is cancelled`);
          setCancel(null);
          window.location.reload();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="cancel-confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure you want to delete this?</h3>

          <div className="modal-action">
            <button onClick={() => handleCancel()} className="btn btn-xs btn-error">
              Yes
            </button>
            <label for="cancel-confirm-modal" className="btn btn-xs ">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
