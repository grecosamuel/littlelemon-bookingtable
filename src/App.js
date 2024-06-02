import ContactDetails from "./components/ContactDetails";
import Header from "./components/Header";
import ModalConfirm from "./components/ModalConfirm";
import SelectDateTime from "./components/SelectDateTime";
import SelectGuests from "./components/SelectGuests";
import { ReservationContextProvider } from "./context/ReservationContext";


function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title-page">Book a table</h1>

        <ReservationContextProvider>
          <SelectDateTime />
          <SelectGuests />
          <ContactDetails />
          <ModalConfirm />
        </ReservationContextProvider>
 
      </main>
    </>
  );
}

export default App;
