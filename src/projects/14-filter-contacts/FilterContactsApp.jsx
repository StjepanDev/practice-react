import React, { useRef, useEffect } from "react";
import Title from "../components/Title";
import contactsData from "./Data.json";

export default function FilterContactsApp() {
  let inputSearch = useRef(null);

  useEffect(() => {
    inputSearch.current.focus();

    //   return () => {

    //   }
  }, []);

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
      />
      <section
        className='d-flex'
        style={{ gap: 15, maxWidth: 1600, margin: "auto" }}
      >
        {contactsData.map((c) => (
          <ul>
            <li>{c.last_name}</li>
          </ul>
        ))}
      </section>
    </div>
  );
}
