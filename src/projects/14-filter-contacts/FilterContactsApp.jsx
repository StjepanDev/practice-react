import React, { useRef, useEffect, useState } from "react";
import Title from "../components/Title";
import Contact from "./Contact";
import contactsData from "./Data.json";

export default function FilterContactsApp() {
  let inputSearch = useRef(null);

  useEffect(() => {
    inputSearch.current.focus();

    //   return () => {

    //   }
  }, []);

  const [searchContact, setSearchContact] = useState("");

  return (
    <div className='text-center'>
      <Title text={"Filter Contacts"} />
      <input
        className='mb-2'
        style={{ padding: "0.3rem 0.5rem" }}
        type='text'
        placeholder='Search by first name'
        id=''
        ref={inputSearch}
        onChange={(e) => setSearchContact(e.target.value)}
      />
      <section
        className='d-flex'
        style={{
          gap: 15,
          maxWidth: "1600px",
          margin: "auto",
          flexWrap: "wrap",
        }}
      >
        {contactsData
          .filter((contact) => {
            if (searchContact === "") {
              return contact;
            } else if (
              contact.first_name
                .toLocaleLowerCase()
                .includes(searchContact.toLocaleLowerCase())
            ) {
              return contact;
            }
          })
          .map((c) => (
            <Contact
              contact={c}
              cardColor={"card-info"}
              textColor={"text-dark"}
            />
          ))}
      </section>
    </div>
  );
}
