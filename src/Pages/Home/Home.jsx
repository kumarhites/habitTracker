import React, { useState } from "react";
import HabitCard from "../../Components/HabitCard";
import CreateHabitCard from "../../Components/CreateHabitCard";
import Modal from "../../Components/Modal";
import { useHabit } from "../../main";

const Home = () => {
  const { habits } = useHabit();
  const [showModal, setShowModal] = useState("modal-close");
  return (
    <div className="pt-32 px-5">
      <div className="absolute z-10 justify-center items-center">
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
      <div className="py-5">
        <CreateHabitCard setShowModal={setShowModal} />
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {habits.length <= 0 ? (
          <p className="text-xl font-bold">No habits found</p>
        ) : (
          habits
            .filter((habit) => habit.archived !== true)
            .map((habit) => <HabitCard habit={habit} key={habit.id} />)
        )}
      </div>
    </div>
  );
};

export default Home;
