import ContactDetails from "./components/ContactDetails";
import Header from "./components/Header";
import SelectDateTime from "./components/SelectDateTime";
import SelectGuests from "./components/SelectGuests";



function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title-page">Book a table</h1>

        <SelectDateTime />
        <SelectGuests />
        <ContactDetails />
      </main>
    </>
  );
}

export default App;
