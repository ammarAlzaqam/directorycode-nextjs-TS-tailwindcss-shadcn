import { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdInfo, MdOutlineSettingsSuggest } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";

interface Link {
  Icon: IconType;
  label: string;
  route: string;
}

const linksList: Link[] = [
  {
    Icon: FaHome,
    label: "Home",
    route: "/",
  },
  {
    Icon: MdInfo,
    label: "ABOUT US",
    route: "/about",
  },
  {
    Icon: MdOutlineSettingsSuggest,
    label: "SERVICES",
    route: "/services",
  },
  {
    Icon: PiBagFill,
    label: "PORTFOLIO",
    route: "/portfolio",
  },
  {
    Icon: LuMessageCircleMore,
    label: "CONTACT US",
    route: "/contact",
  },
];

export default linksList;
