import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(people) {
 return(
  <Card
  key = {people.id}
  name={people.name}
  url = {people.imgURL}
  no = {people.phone}
  mail = {people.mail}
  />
 );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* <Card 
   name = {contacts[0].name}
   url = {contacts[0].imgURL}
   no = {contacts[0].phone}
mail = {contacts[0].email}
   />


<Card 
   name = {contacts[2].name}
   url = {contacts[2].imgURL}
   no = {contacts[2].phone}
   mail = {contacts[2].email}
   /> */}
    </div>
  );
}

export default App;
