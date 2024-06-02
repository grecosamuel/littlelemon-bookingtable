import { useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';

const SelectDateTime = () => {

    const { formik } = useContext(ReservationContext);

    return(
        <section className="choose-booking-date">
            <h3 className="title">Select when you want to come</h3>

            <input type="date" name="date" onChange={formik.handleChange} value={formik.values.date}/>
            <input type="time" name="time" onChange={formik.handleChange} value={formik.values.time}/>
        </section>
    );
}

export default SelectDateTime;