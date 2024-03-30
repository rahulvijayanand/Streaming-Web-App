import {
  FiHome,
  FiCompass,
  FiClock,
  FiGrid,
  FiSettings,
  FiFlag,
  FiHelpCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { MdOutlineHistory } from "react-icons/md";
export const navData = [
  {
    id: 0,
    icon: <FiHome size={18} />,
    text: "Home",
    link: "/",
  },
  {
    id: 1,
    icon: <FiCompass size={18} />,
    text: "Explore",
    link: "/1",
  },
  {
    id: 2,
    icon: <FiClock size={18} />,
    text: "Watch Later",
    link: "/2",
  },
  {
    id: 3,
    icon: <FiGrid size={18} />,
    text: "Library",
    link: "/3",
  },
  {
    id: 4,
    icon: <MdOutlineHistory size={18} />,
    text: "History",
    link: "/4",
  },
  {
    id: 5,
    icon: <FiSettings size={18} />,
    text: "Settings",
    link: "/5",
  },
  {
    id: 6,
    icon: <FiFlag size={18} />,
    text: "Report history",
    link: "/6",
  },
  {
    id: 7,
    icon: <FiHelpCircle size={18} />,
    text: "Help",
    link: "/7",
  },
  {
    id: 8,
    icon: <FiAlertCircle size={18} />,
    text: "Send feedback",
    link: "/8",
  },
];
