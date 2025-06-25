import { useState } from 'react'

const ConsultForm = () => {

    const [contactName, setContactName] = useState("")
    const [contactEmail, setContactEmail] = useState("")
    const [contactPhone, setContactPhone] = useState("")
    const [contactCons, setContactCons] = useState("")
    const [modalContactOpen, setModalContactOpen] = useState(false)

    const sendForm = (event) => {
        event.preventDefault()
        setModalContactOpen(true)
    }

    const cleanFields = () => {
        setContactName("")
        setContactEmail("")
        setContactPhone("")
        setContactCons("")
    }

    const closeModal = () => {

        setModalContactOpen(false)
        cleanFields()
    }

    return (
        <div className="consult">
            <h3>Envianos tu consulta</h3>
            <form onSubmit={sendForm}>
                <div className="consult-item">
                    <label className="col-form-label mt-4" htmlFor="contactName">Nombre *</label>
                    <input type="text" className="form-control" placeholder="Ingrese nombre" id="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)} required/>
                </div>
                <div className="consult-item">
                    <label className="form-label mt-4" htmlFor="contactEmail">Email *</label>
                    <input type="email" className="form-control" id="contactEmail" aria-describedby="emailHelp" placeholder="Ingrese Email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required />
                </div>
                <div>
                    <label className="col-form-label mt-4" htmlFor="contactPhone">Teléfono *</label>
                    <input type="text" className="form-control" placeholder="Ingrese Teléfono" id="contactPhone" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} required />
                </div>
                <div>
                    <label className="form-label mt-4" htmlFor="contactCons" >Consulta *</label>
                    <textarea className="form-control" id="contactCons" rows="3" value={contactCons} onChange={(e) => setContactCons(e.target.value)} required></textarea>
                </div>
                <div>
                    {/* <Button classes="btn btn-light" buttonText="Enviar Consulta"></Button> */}
                    <button className="btn btn-light">Enviar Consulta</button>
                </div>
            </form>

            {modalContactOpen && (
            <div style={{display:"block"}} className="modal" id="modalContact">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title">Modal title</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                <span aria-hidden="true"></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Mensaje Enviado</p>
                            <p>En breve responderemos a su consulta...</p>
                            <p>Muchas gracias!</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )

}

export default ConsultForm
