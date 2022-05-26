import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteBooking, setDeleteBooking }) => {
    const { product, _id } = deleteBooking;
    const handleDelete = () => {
        fetch(`http://localhost:5000/bookings//${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`This booking is cancelled`)
                    setDeleteBooking(null)
                }
                else {
                }
            })
        return (
            <div>
                <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-red-400">Are you sure you want to delete {product} order?</h3>

                        <div className="modal-action">
                            <button onClick={() => { handleDelete() }} className="btn btn-xs btn-error">Cancel</button>
                            <label for="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                        </div>
                    </div>
                </div>

            </div >
        );
    };
}

export default DeleteConfirmModal