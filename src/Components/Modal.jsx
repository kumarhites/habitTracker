import React, { useState } from "react";
import { useHabit } from "../main";

const Modal = ({ showModal, setShowModal }) => {
  const { setNewHabit, newHabit, handleSetNewHabits } = useHabit();
  const [error, setError] = useState("");

  const handleInput = (e) => {
    setNewHabit({
      ...newHabit,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <dialog id="createHabit" className={`modal ${showModal}`}>
        <form method="dialog" className="modal-box max-w-2xl">
          {/* <h3 className="text-lg">New Habit</h3> */}
          <h1 className="font-bold text-3xl">New Habit</h1>
          <div className="items-center gap-3">
            <p className="py-4">
              Name <span className="text-red-300">*</span>
            </p>
            <input
              required
              type="text"
              name="name"
              placeholder="New Habit"
              className="input input-bordered w-full bg-slate-800"
              value={newHabit.name}
              onChange={handleInput}
            />
            {error ? <p className="text-red-400">Please enter a name</p> : ""}
          </div>
          <div className="py-5">
            <div className="flex gap-3">
              <div className="flex-1">
                <p className="py-2 uppercase">Repeat</p>
                <select
                  defaultValue="Daily"
                  name="repeat"
                  className="select select-bordered w-full max-w-xs bg-slate-800"
                  onChange={handleInput}
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              <div className="flex-1">
                <p className="py-2 uppercase">Goal</p>
                <select
                  defaultValue="1 times daily"
                  name="goal"
                  className="select select-bordered w-full max-w-xs bg-slate-800"
                  onChange={handleInput}
                >
                  <option value="1 times daily">1 times daily</option>
                  <option value="2 times daily">2 times daily</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <p className="py-2 uppercase">Time of Day</p>
                <select
                  defaultValue="Any time"
                  name="time"
                  className="select select-bordered w-full max-w-xs bg-slate-800"
                  onChange={handleInput}
                >
                  <option value="🕐 Any time">Any time</option>
                  <option value="🌞 Morning">Morning</option>
                  <option value="🌄 Afternoon">Afternoon</option>
                  <option value="🌆 Evening">Evening</option>
                  <option value="🌙 Night">Night</option>
                </select>
              </div>
              <div className="flex-1">
                <p className="py-2 uppercase">Start date</p>
                <select
                  defaultValue="Today"
                  className="select select-bordered w-full max-w-xs bg-slate-800"
                  name="startDate"
                  onChange={handleInput}
                >
                  <option defaultValue="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                </select>
              </div>
            </div>
          </div>

          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn" onClick={() => setShowModal("modal-close")}>
              Close
            </button>
            <button className="btn" onClick={handleSetNewHabits}>
              Add
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
