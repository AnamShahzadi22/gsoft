
import {
  FiUsers,
  FiPhone,
} from "react-icons/fi";
import {
  BiTargetLock,
  BiBarChartSquare,
} from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdHandshake } from "react-icons/md";

 export const servicecorevalues = {
  left: [
    {
      title: "Scrum",
      description:
        "We optimise your process and make sure that it's transparent to you. We do this through excellent communication, efficiency in all areas of production/workflow plus transparency.",
      icon: <FiUsers className="text-3xl" />,
    },
    {
      title: "Accuracy & Devotion",
      description:
        "We solve technical puzzles, look for the most suitable technological implementation and never compromise quality. That's how we work!",
      icon: <BiTargetLock className="text-3xl" />,
    },
    {
      title: "Customer Service",
      description:
        "We are always available for any questions or concerns you may have about your business. Your satisfaction is our top priority!",
      icon: <FiPhone className="text-3xl" />,
    },
  ],
  right: [
    {
      title: "Reliability & Trust",
      description:
        "We are committed to establishing a long-lasting, trustworthy partnership with you. We believe this is the only way for us both to be successful and enjoy personal growth as well!",
      icon: <MdHandshake className="text-3xl" />,
    },
    {
      title: "Quality & Effective Solutions",
      description:
        "The world’s leading IT solutions provider is committed to meeting all of your needs with outstanding cutting-edge services that add real value.",
      icon: <HiOutlineLightBulb className="text-3xl" />,
    },
    {
      title: "Real Time Reporting",
      description:
        "We work hard to keep our clients up-to-date on a weekly, biweekly, and on monthly basis as per your needs.",
      icon: <BiBarChartSquare className="text-3xl" />,
    },
  ],
};

