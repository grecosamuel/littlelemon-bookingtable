import { ReservationContext } from '../context/ReservationContext';
import { useContext } from 'react';

const ContactDetails = () => {

    const { formik } = useContext(ReservationContext);


    return(
        <section className="contact-details">
            <h3 className="title">Add your contact information</h3>

            <div className='form-wrapper'>
                <input name="firstname" type="text" placeholder="First name" value={formik.values.firstname} onChange={formik.handleChange}/>
                
                

                <input name="lastname" type="text" placeholder="Lastname" value={formik.values.lastname} onChange={formik.handleChange}/>
                
                
                <input name="mobile" type="text" placeholder="Mobile phone" value={formik.values.mobile} onChange={formik.handleChange}/>
                
                {formik.errors ? Object.keys(formik.errors).map((error, indexError) => (
                    <span key={`error-contact-${indexError}`} className='error'>{formik.errors[error]}</span>
                )) :  null}

                <input type="submit" value="Reserve" onClick={formik.submitForm}/>
            </div>

        </section>
    );
}

export default ContactDetails;