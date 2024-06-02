import { createContext, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const ReservationContext = createContext();

export const ReservationContextProvider = ({ children }) => {

    const [displayModal, setDisplayModal] = useState(false);

    const validationSchema = Yup.object().shape({
        date: Yup.date("Date must be a date").required("Date is required"),
        time: Yup.string().required("Time is required").test("timecheck", "Time can start from 12:00 and end to 14:00", value => {
            let hour = value.split(':')[0];
            let hourInt = parseInt(hour);

            if (hourInt < 12 || hourInt > 14) return false;
            return true;
        }),
        guests: Yup.number("Guests must be a number").required("Guests are required"),
        firstname: Yup.string().required("Firstname required"),
        lastname: Yup.string().required('Lastname required'),
        mobile: Yup.string().required("Mobile is required")
    });

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: 1,
            firstname: "",
            lastname: "",
            mobile: ""
        },
        validateOnChange: false,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setDisplayModal(true);
            formik.resetForm();
        }
    });

    return <ReservationContext.Provider value={{formik, modal: { displayModal, setDisplayModal }}}>
        {children}
    </ReservationContext.Provider>
}