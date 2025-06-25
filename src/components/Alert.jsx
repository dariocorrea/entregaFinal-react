import React from 'react'

const Alert = ({ typeAlert, closeAlert, messageAlert, confirmAlert }) => {
    return (
        <div style={{ display: "block" }} className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ backgroundColor: "#2222ab" }}>
                    <div className="modal-header">
                        <h5 className="modal-title"></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeAlert}>
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>{messageAlert}</p>
                    </div>
                    <div className="formButtonEditCancel">
                        {typeAlert === "Basic" && (
                            <button className="btn btn-primary" onClick={closeAlert}>Aceptar</button>
                        )}
                        {typeAlert === "Confirm" && (
                            <>
                                <button className="btn btn-primary" onClick={() => {confirmAlert(); closeAlert();}}>Aceptar</button>
                                <button className="btn btn-success" onClick={() => closeAlert()}>Cancelar</button>
                            </>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert