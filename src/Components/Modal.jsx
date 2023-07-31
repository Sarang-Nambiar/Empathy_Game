import '../Stylesheets/Modal.css';
export default function Modal({ closeModal }){
    
    const handleClose = (e) => {
        if(e.target.className === 'modal-background'){
            closeModal(false);
        }
    }
    return (
        <>
         <div className="modal-background" onClick={handleClose}>
            <div className="modal-container">
                Enter your option container here
            </div>
         </div>
        </>
    )
}