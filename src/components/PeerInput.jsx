import React from "react";

const PeerInput = ({ placeholder, id, type }) => {
  return (
    <div class="relative">
      <input
        type={type}
        id={id}
        class="block rounded-lg px-1.5 pb-2.5 pt-4 w-full text-xs text-gray-900 bg-white border-[1px] border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        class="absolute text-xs text-[#8B8B8B]  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-text  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {placeholder}
      </label>
      {/* <p class="mt-2 text-sm text-red-600 dark:text-red-500">
        <span class="font-medium">Oh, snapp!</span> Some error message.
      </p> */}
    </div>
  );
};

export default PeerInput;
