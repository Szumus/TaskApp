import React from "react";

const TaskGrid = () => {
  return (
    <div className="grid text-white grid-cols-3 gap-4">
      <div className="m-2">
        <div className="bg-[#2b2d34] flex  p-4 rounded-t-md">
          <div className="w-4 h-4 m-1 bg-lime-500 rounded-full"></div>
          TODO
        </div>
        <div className="border-t-2 bg-[#2b2d34] rounded-b-md border-[#1c1d1e]">
          <h1>sahdd</h1>
        </div>
      </div>
      <div className="bg-[#24262d] p-4 rounded-md">TODO</div>
      <div className="bg-[#24262d] p-4 rounded-md">TODO</div>
    </div>
  );
};

export default TaskGrid;
