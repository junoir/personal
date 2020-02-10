import React from "react";
import Featured from "./featured";
import MeetPlayers from "./meetPlayers";
import Promotion from "./promotion";

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <MeetPlayers />
      <Promotion />
    </div>
  );
};

export default Home;
