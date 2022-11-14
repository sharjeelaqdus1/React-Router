import { Outlet,Link, useLoaderData, Form } from "react-router-dom";
import ListItem from "../common/listItem";
import { getContacts,createContact } from "../helpers/contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
//Action to Create Contact
export async function action(params) {
 
  await createContact();
}

// Root Component
export default function Root() {
  const { contacts } = useLoaderData();

    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
          
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <Form method="post">
            <button type="submit">New</button>
          </Form>
          </div>
          <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
              <ListItem contact={contact} />
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </>
    )
}