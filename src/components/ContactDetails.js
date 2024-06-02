const ContactDetails = () => {
    return(
        <section className="contact-details">
            <h3 className="title">Add your contact information</h3>

            <form>
                <input name="firstname" type="text" placeholder="First name" />
                <input name="lastname" type="text" placeholder="Last name" />
                <input name="phone" type="text" placeholder="Mobile phone" />

                <input type="submit" value="Reserve" />
            </form>

        </section>
    );
}

export default ContactDetails;