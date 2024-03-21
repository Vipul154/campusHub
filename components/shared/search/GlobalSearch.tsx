// import Image from "next/image";
// import React from "react";
// import { Input } from "@/components/ui/input";

// const GlobalSearch = () => {
//   return (
//     <div className="relative w-full max-w-[650px] max-lg:hidden">
//       <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4"></div>
//       <Image
//         src="/assets/icons/search.svg"
//         alt="search"
//         width={24}
//         height={24}
//         className="cursor-pointer"
//       />
//       <Input
//         type="text"
//         placeholder="Search Globally"
//         value=""
//         className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
//       />
//     </div>
//   );
// };

// export default GlobalSearch;
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        {/* A bug was solved here, where we passed the value null wihout any onChnage. It was removed for me, as I copied the code from somewhere as a reference. */}
        <Input
          type="text"
          placeholder="Search globally"
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
