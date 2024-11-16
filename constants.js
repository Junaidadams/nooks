import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsTwitterX,
} from "react-icons/bs";
import {
  MdOutlineRestaurantMenu,
  MdFastfood,
  MdWeb,
  MdMap,
  MdHouse,
  MdMusicNote,
  MdEvent,
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
      { key: 1, name: "Linked In", link: "/", logo: BsLinkedin },
      { key: 2, name: "Facebook", link: "/", logo: BsFacebook },
      { key: 3, name: "Instagram", link: "/", logo: BsInstagram },
      { key: 4, name: "Twitter", link: "/", logo: BsTwitterX },
      { key: 5, name: "Yo", link: "/", logo: BsTwitterX },
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
    name: "Meal",
    description: "A meal or menu item that you really dig.",
    icon: MdFastfood,
  },
  {
    key: 2,
    name: "Restaurant",
    description: "A go-to spot that serves up great food or unique vibes.",
    icon: MdOutlineRestaurantMenu,
  },
  {
    key: 3,
    name: "Website",
    description: "An online space that brings you comfort or inspiration.",
    icon: MdWeb,
  },
  {
    key: 4,
    name: "Small business",
    description: "A local business you love to support.",
    icon: MdHouse,
  },
  {
    key: 5,
    name: "Area/place",
    description: "A location that feels like a special escape or retreat.",
    icon: MdMap,
  },
  {
    key: 6,
    name: "Music",
    description: "A song, album, or playlist that soothes or energizes you.",
    icon: MdMusicNote,
  },
  {
    key: 7,
    name: "Local event",
    description:
      "An event or gathering that makes you feel part of a community.",
    icon: MdEvent,
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
