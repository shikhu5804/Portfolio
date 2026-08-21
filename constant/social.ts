import type { IconType } from "react-icons";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

import { SiLeetcode } from "react-icons/si";

interface Social {
  name: string;
  handle: string;
  url: string;
  icon: IconType;
}

export const socials = [
  {
    name: "GitHub",
    handle: "shikhu5804",
    url: "https://github.com/shikhu5804",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    handle: "vrmashikhar",
    url: "https://linkedin.com/in/vrmashikhar",
    icon: FaLinkedin,
  },
  {
    name: "LeetCode",
    handle: "shikhu5804",
    url: "https://leetcode.com/u/shikhu5804",
    icon: SiLeetcode,
  },
] satisfies Social[];
