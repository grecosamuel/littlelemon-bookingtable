const SelectGuests = () => {
    return(
        <section className="choose-booking-guests">
            <h3 className="title">How much people for the reservation</h3>

            <div className="guestpicker">
                <button className="minus">-</button>
                <input type="number" value={1}/>
                <button className="plus">+</button>
            </div>
        </section>
    );
}

export default SelectGuests;