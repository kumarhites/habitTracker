import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { GoArchive } from "react-icons/go";
import { useHabit } from "../main";

const HabitCard = ({ habit }) => {
  const { handleDelete, handleArchive } = useHabit();
  return (
    <div>
      <div className="card max-w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title text-3xl">{habit.name}</h2>
          <p className="">
            {habit.repeat} | <span className="">{habit.time}</span>
          </p>

          {habit.archived ? "" : <p className="">{habit.goal}</p>}
          {habit.archived ? <p className="">Archived</p> : ""}
          <div className="card-actions justify-end">
            {habit.archived ? (
              ""
            ) : (
              <>
                <button className="btn">{<AiOutlineEdit size={20} />}</button>
                <button className="btn" onClick={() => handleArchive(habit.id)}>
                  {<GoArchive size={20} />}
                </button>
              </>
            )}
            <button className="btn" onClick={() => handleDelete(habit.id)}>
              {<AiOutlineDelete size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
