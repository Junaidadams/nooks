import { BsInstagram, BsTwitterX } from "react-icons/bs";
import {
  MdOutlineRestaurantMenu,
  MdFastfood,
  MdLocalCafe,
  MdBakeryDining,
  MdLocalBar,
  MdLocationOn,
  MdStorefront,
  MdAdd,
} from "react-icons/md";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

import logo from "./src/assets/logo.png";

export const websiteInformation = [
  {
    name: "website",
    copywright: "Blah blah blah, copyright blah blah.",
    year: 2024,
    developer: "Junaid Adams",
    logo: logo,
    socials: [
      // { key: 1, name: "Linked In", link: "/", logo: BsLinkedin },
      // { key: 2, name: "Facebook", link: "/", logo: BsFacebook },
      { key: 3, name: "Instagram", link: "/", logo: BsInstagram },
      { key: 4, name: "Twitter", link: "/", logo: BsTwitterX },
    ],
  },
];

export const contactInformation = [
  {
    key: 1,
    name: "E-mail",
    address: "junaidadams117@gmail.com",
    icon: AiOutlineMail,
  },
  { key: 2, name: "Call", address: "0826756350", icon: AiOutlinePhone },
];

export const operatingHours = [
  { key: 1, day: "Monday", open: "08:00", closed: "17:00" },
  { key: 2, day: "Tuesday", open: "08:00", closed: "17:00" },
  { key: 3, day: "Wednesday", open: "08:00", closed: "17:00" },
  { key: 4, day: "Thursday", open: "08:00", closed: "17:00" },
  { key: 5, day: "Friday", open: "08:00", closed: "17:00" },
  { key: 6, day: "Saturday", open: "10:00", closed: "14:00" },
  { key: 7, day: "Sunday", open: "Closed", closed: "Closed" },
];

export const navigationLinks = [
  {
    key: 1,
    name: "home",
    link: "/",
  },
  {
    key: 2,
    name: "about",
    link: "/#about",
  },
  {
    key: 3,
    name: "contact",
    link: "/contact",
  },
];

export const signedInNavLinks = [
  {
    key: 1,
    name: "archive",
    link: "/archive",
  },
  {
    key: 2,
    name: "profile",
    link: "/profile-page",
  },
  {
    key: 3,
    name: "logout",
    link: "/logout",
  },
];

export const footerLinks = [
  {
    key: 1,
    name: "home",
    link: "/",
  },
  {
    key: 2,
    name: "about",
    link: "#about",
  },
  {
    key: 3,
    name: "services",
    link: "/services",
  },
  {
    key: 4,
    name: "FAQ",
    link: "/faq",
  },
  {
    key: 5,
    name: "contact",
    link: "/contact",
  },
  {
    key: 6,
    name: "terms and conditions",
    link: "/terms-and-conditions",
  },
  {
    key: 7,
    name: "contact",
    link: "/contact",
  },
];

export const nookTypes = [
  {
    key: 1,
    name: "Cafe",
    description: "A cozy spot for coffee, tea, and good vibes.",
    icon: MdLocalCafe,
  },
  {
    key: 2,
    name: "Restaurant",
    description: "A go-to place for delicious meals and great ambiance.",
    icon: MdOutlineRestaurantMenu,
  },
  {
    key: 3,
    name: "Bakery",
    description:
      "A bakery that serves fresh bread, pastries, and sweet treats.",
    icon: MdBakeryDining,
  },
  {
    key: 4,
    name: "Takeout",
    description: "A quick and tasty spot for food on the go.",
    icon: MdFastfood,
  },
  {
    key: 5,
    name: "Bar",
    description: "A lively place to grab a drink and unwind.",
    icon: MdLocalBar,
  },
  {
    key: 6,
    name: "Market",
    description: "A local market where you find fresh produce or unique goods.",
    icon: MdStorefront,
  },
  {
    key: 7,
    name: "Landmark",
    description: "A notable place worth visiting in your area.",
    icon: MdLocationOn,
  },
  {
    key: 8,
    name: "More",
    description: "The list of nooks will grow as suggestions start to come in.",
    icon: MdAdd,
  },
];

export const getStartedSteps = [
  {
    key: 1,
    name: "Sign up",
    description: "Create a free account or sign up with your google account.",
  },
  {
    key: 2,
    name: "Pick a nook (or don't)",
    description:
      "Figure out which of your nooks you want to share. If you're here to browse you can skip the next step and go straight to viewing current nooks by area, type or name.",
  },
  {
    key: 3,
    name: "List your nook",
    description:
      "Make use of our simple nook creation page to capture the essence of why you love this nook so much and why you think others should support, experience or visit your nook.",
  },
  {
    key: 4,
    name: "That's it",
    description:
      "That's pretty much all there is to it. Enjoy sharing and discovering.",
  },
];
