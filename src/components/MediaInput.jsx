import React from "react";

const MediaInput = () => {
  return (
    <div className="mx-4 py-4">
      <div className="text-xs">Media</div>
      <div class="flex items-center justify-center w-full mt-4">
        <label
          for="media"
          class="flex flex-col items-center justify-center w-full h-32 border-[1px] border-gray-300 rounded-lg cursor-pointer bg-white   hover:bg-gray-100"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-3">
            <div class="text-xs text-primary flex gap-2 items-center">
              <img src="/plus.svg" />
              <div>Uplod File / URL</div>
            </div>
            <p class="text-[10px] text-[#949494] ">Accept Image,3d ,JPG</p>
          </div>
          <input id="media" type="file" class="hidden" />
        </label>
      </div>
    </div>
  );
};

export default MediaInput;
