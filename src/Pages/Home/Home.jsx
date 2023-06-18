import React, { useState } from "react";
import HabitCard from "../../Components/HabitCard";
import CreateHabitCard from "../../Components/CreateHabitCard";
import Modal from "../../Components/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="pt-32 px-5">
      <div className="absolute z-10 justify-center items-center">
      {showModal ? <Modal /> : ""}
      </div>
      <div className="py-5">
        <CreateHabitCard />
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
        <HabitCard />
      </div>
    </div>
  );
};

export default Home;
