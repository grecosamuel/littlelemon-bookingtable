import { useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';

const ModalConfirm = () => {
    const { modal } = useContext(ReservationContext);

    const closeModal = () => {
        modal.setDisplayModal(false);
    }

    return(
        <div className='modal-info' style={{ display: modal.displayModal ? 'flex':'none'}}>
            <h1>Reservation completed !</h1>
            <p>
                Reservation process is completed succesfully !
                We are waiting for you
            </p>

            <button onClick={closeModal}>Ok</button>
        </div>
    );
}

export default ModalConfirm;