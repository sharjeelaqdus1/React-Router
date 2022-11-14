


import { Link} from "react-router-dom";

export default function ListItem ({contact}){
return (
    <li key={contact.id}>
    <Link to={`contacts/${contact.id}`}>
      {contact.first || contact.last ? (
        <>
          {contact.first} {contact.last}
        </>
      ) : (
        <i>No Name</i>
      )}{" "}
      {contact.favorite && <span>★</span>}
    </Link>
  </li>
)
}