import React from "react";
import Modal from "../../Components/Modal";
import CreateHabitCard from "../../Components/CreateHabitCard";
import HabitCard from "../../Components/HabitCard";
import { useHabit } from "../../main";

const Archived = () => {
  const { habits } = useHabit();
  return (
    <div className="pt-32 px-5">
      <div className="py-5">Archived</div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {habits.length <= 0 ? (
          <p className="text-xl font-bold">No archived habits found</p>
        ) : (
          habits
            .filter((habit) => habit.archived === true)
            .map((habit) => <HabitCard habit={habit} key={habit.id} />)
        )}
      </div>
    </div>
  );
};

export default Archived;
