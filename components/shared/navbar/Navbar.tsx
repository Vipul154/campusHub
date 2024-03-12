// import { SignedIn, UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import Theme from "../Theme";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="flex-between bg-light-900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
//         <Link href="/" className="flex items-center gap-1">
//           <Image
//             src="/public/assets/images/default-logo.svg"
//             width={23}
//             height={23}
//             alt="Main Logo"
//           ></Image>
//           <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
//             Campus<span className="text-primary-500">Hub</span>
//           </p>
//         </Link>
//         GlobalSearch Component
//         <div className="flex-between flex gap-5">
//           <Theme />
//           <SignedIn>
//             <UserButton
//               afterSignOutUrl="/"
//               appearance={{
//                 elements: { avatarBox: "h-10 w-10" },
//                 variables: { colorPrimary: "#ff7000" },
//               }}
//             />
//           </SignedIn>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "../Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";
// import GlobalSearch from "./search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="DevFlow"
          width={23}
          height={23}
        />

        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      {/* Global Search */}
      <GlobalSearch />

      <div className="flex-between gap-5">
        {/* Theme */}
        <Theme />
        {/* User */}
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: "h-10 w-10" },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
