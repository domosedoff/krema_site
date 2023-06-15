import { Input, initTE } from "tw-elements";
import { useEffect } from "react";

const Inputs = () => {
  // useEffect(() => {
  //   initTE({ Inputs, Input });
  // }, []);

  return (
    <div>
      <input
        type="number"
        value="sdss"
        placeholder="30%"
        className="w-16 border-1 border-rose-950"
      />
    </div>
  );
};

export default Inputs;

// return (
//   <div className="relative ">
//     <input
//       type="number"
//       className=" peer block  w-24 rounded border-1 border-gray-500 bg-white px-3 py-[0.32rem] leading-[1.6] outline-black transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//       id="exampleFormControlInputNumber"
//       placeholder="30%"
//     />
//     <label
//       htmlFor="exampleFormControlInputNumber"
//       className="bg-white pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//     >
//       Жирность
//     </label>
//   </div>
// );
