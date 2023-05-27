export default function EditDrinkModal() {
    return (
        <div
            className="modal fade"
            id="editDrinkModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="editDrinkModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editDrinkModalLabel"><strong>Edit drink</strong></h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal">
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal">
                            {/* onClick={saveChanges}> */}
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}