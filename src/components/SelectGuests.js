import { useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';


const SelectGuests = () => {

    const { formik } = useContext(ReservationContext);


   const increaseGuest = () => {
    if (formik.values.guests === 6) return;
    formik.setFieldValue("guests", formik.values.guests + 1);
   }

   const decreaseGuest = () => {
   if (formik.values.guests === 1) return;
    formik.setFieldValue("guests", formik.values.guests - 1);
   }

    return(
        <section className="choose-booking-guests">
            <h3 className="title">How much people for the reservation</h3>

            <div className="guestpicker">
                <button className="minus" onClick={decreaseGuest}>-</button>
                <input type="number" value={formik.values.guests}/>
                <button className="plus" onClick={increaseGuest}>+</button>
            </div>
            {formik.errors.guests ?? null}
        </section>
    );
}

export default SelectGuests;