import React from "react";

const CreateHabitCard = ({setShowModal}) => {
  return (
    <>
      <div className="card w-96 bg-blue-300/[0.08] text-white">
        <div className="card-body">
          <h2 className="card-title">Create a new Habit</h2>
          <p>Small daily habits pave the way to extraordinary achievements.</p>
          <div className="card-actions justify-end">
            <button className="btn" onClick={() => setShowModal("modal-open")}>
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateHabitCard;
