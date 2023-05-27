import axios from "axios";

export default function DeleteStaffModal({name, id}) {

    const handleDelete = (id) => {
        axios.delete("http://localhost:8000/employees/" + id)
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
    }

    return (
        <div
            className="modal fade"
            id="deleteStaffModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="delStaffModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="delStaffModalLabel"><strong>Delete a drink</strong></h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure to delete <strong>{name}</strong>?<br />This action cannot be reversed.
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                            onClick={() => handleDelete(id)}>
                            Delete
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal">
                            Cancel
                        </button>                        
                    </div>
                </div>
            </div>
        </div>
    )
}