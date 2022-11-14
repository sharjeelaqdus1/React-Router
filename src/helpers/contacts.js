const contact = [{
    first: "Sara",
    last: "Ali",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "Sara_Ali",
    notes: "Some notes",
    favorite: true,
    id:1,
  },
  {
    first: "Noor",
    last: "Ayn",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "Noor_Ayn",
    notes: "Some notes",
    favorite: true,
    id:2,
  }];
  export async function getContact (contactId){
   
  
    console.log("contact id",contactId)
  //return contact
  return contact[contactId-1]
  }
  
  export async function loader({ params }) {
    console.log("params",params)
    return getContact(params.contactId);
  }
  export async function getContacts (){
   
  
      console.log("getting contacts",contact)
    return contact
  }
  
  
  
  export async function createContact(){
    contact.push(
      {
        first: "New",
        last: "Name",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: false,
      }
    )
      console.log("calling create contact")
  
  }