import React from "react";
import { Header } from "../../components/header/Header";
import pic from "../../images/pic.png";
// import Cards from "../../components/card/Cards";
import Carousels from "../../components/carousel/Carousels";
import TwoSections from "../../components/twosections/TwoSections";
// import AddToCalendar from "react-add-to-calendar";
import { google, outlook, office365, yahoo, ics } from "calendar-link";

export function Home() {
  const event = {
    title: "My birthday party",
    description: "Be there!",
    start: "2019-12-29 18:00:00 +0100",
    duration: [3, "hour"],
  };
  console.log(google(event));
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
