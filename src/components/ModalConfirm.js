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
                Deserunt id ipsum consectetur minim ex dolor deserunt commodo excepteur adipisicing commodo. Eiusmod ex fugiat laboris nisi eiusmod. Nostrud non est fugiat laborum occaecat.
            </p>

            <button onClick={closeModal}>Ok</button>
        </div>
    );
}

export default ModalConfirm;