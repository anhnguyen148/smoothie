import axios from "axios";

export default function DeleteDrinkModal({name, id}) {

    const handleDelete = (id) => {
        axios.delete("http://localhost:8000/drinks/" + id)
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
    }

    return (
        <div
            className="modal fade"
            id="deleteDrinkModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="delDrinkModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="delDrinkModalLabel"><strong>Delete a drink</strong></h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure to delete <strong>{name}</strong>?<br />This action cannot reverse.
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