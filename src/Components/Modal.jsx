import React from "react";

const Modal = () => {
  return (
    <>
      <dialog id="createHabit" className="modal">
        <form method="dialog" className="modal-box max-w-2xl">
          <h3 className="text-lg">New Habit</h3>
          <h1 className="font-bold text-3xl">New Habit</h1>
          <div className="items-center gap-3">
            <p className="py-4">
              Name <span className="text-red-300">*</span>
            </p>
            <input
              type="text"
              placeholder="New Habit"
              className="input input-bordered w-full bg-slate-800"
            />
          </div>
          <div className="py-5">
            <div className="flex gap-3">
              <div className="flex-1">
                <p className="py-2 uppercase">Repeat</p>
                <select className="select select-bordered w-full max-w-xs bg-slate-800">
                  <option selected>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="flex-1">
                <p className="py-2 uppercase">Goal</p>
                <select className="select select-bordered w-full max-w-xs bg-slate-800">
                  <option selected>1 times daily</option>
                  <option>2 times daily</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1">
                <p className="py-2 uppercase">Time of Day</p>
                <select className="select select-bordered w-full max-w-xs bg-slate-800">
                  <option selected>Any time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
              <div className="flex-1">
                <p className="py-2 uppercase">Start date</p>
                <select className="select select-bordered w-full max-w-xs bg-slate-800">
                  <option selected>Today</option>
                  <option>Tomorrow</option>
                </select>
              </div>
            </div>
          </div>

          <div className="modal-action">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
            <button className="btn">Add</button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
