import React from "react";
import { Header } from "../../components/header/Header";
import pic from "../../images/pic.png";
// import Cards from "../../components/card/Cards";
import Carousels from "../../components/carousel/Carousels";
import TwoSections from "../../components/twosections/TwoSections";
// import AddToCalendar from "react-add-to-calendar";
import { google, outlook, office365, yahoo, ics } from "calendar-link";

export function Home() {
 
  return (
    <div>
      <Header />

      <Carousels />
      {/* <AddToCalendar event={event} /> */}
      <TwoSections
        title="Welcome to OMG Grocery"
        imgSource={pic}
        desc="Online market for grocery"
        // btnService="b"
      />
      {/* <Cards  /> */}
    </div>
  );
}
