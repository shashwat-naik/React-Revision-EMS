import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[52%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 rounded-lg"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-teal-500 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 px-3 py-1 text-sm rounded">High</h3>
          <h4 className="text-sm">27 Sept 2025</h4>
        </div>
        <h2 className="mt-4 text-2xl font-semibold">Complete React</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ut
          voluptate eius modi perferendis impedit ex voluptatum minus sint
          omnis. Iure
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-lime-500 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-green-700 px-3 py-1 text-sm rounded">Low</h3>
          <h4 className="text-sm">27 Sept 2025</h4>
        </div>
        <h2 className="mt-4 text-2xl font-semibold">Complete React</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ut
          voluptate eius modi perferendis impedit ex voluptatum minus sint
          omnis. Iure
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-cyan-500 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-700 px-3 py-1 text-sm rounded">High</h3>
          <h4 className="text-sm">27 Sept 2025</h4>
        </div>
        <h2 className="mt-4 text-2xl font-semibold">Complete React</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ut
          voluptate eius modi perferendis impedit ex voluptatum minus sint
          omnis. Iure
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-orange-700 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-yellow-500 px-3 py-1 text-sm rounded">Med</h3>
          <h4 className="text-sm">27 Sept 2025</h4>
        </div>
        <h2 className="mt-4 text-2xl font-semibold">Complete React</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ut
          voluptate eius modi perferendis impedit ex voluptatum minus sint
          omnis. Iure
        </p>
      </div>
    </div>
  );
};

export default TaskList;
