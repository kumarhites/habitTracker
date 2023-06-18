import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState({
    name: "",
    goal: "1 times daily",
    repeat: "Daily",
    startDate: "Today",
    time: "Any Time",
  });

  const getData = async () => {
    try {
      const {
        status,
        data: { habits },
      } = await fakeFetch("https://example.com/api/habits");
      if (status === 200) {
        setHabits(habits);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(habits);

  const handleSetNewHabits = () => {
    const newHabitWithId = {
      ...newHabit,
      id: habits.length > 0 ? habits[habits.length - 1].id + 1 : 1,
    };

    setHabits([...habits, newHabitWithId]);
  };

  const handleDelete = (id) => {
    const updatedHabits = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabits);
  };

  const handleArchive = (id) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === id ? { ...habit, archived: true } : habit
    );

    setHabits(updatedHabits);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HabitContext.Provider
      value={{
        habits,
        setNewHabit,
        newHabit,
        handleSetNewHabits,
        handleDelete,
        handleArchive,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);
