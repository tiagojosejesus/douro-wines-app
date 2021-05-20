import React from "react";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaPinterestSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <a href="https://twitter.com/WineDouro">
        <AiOutlineTwitter />
      </a>
      <a href="https://www.instagram.com/dourowineguide2020/">
        <AiFillInstagram />
      </a>
      <a href="https://www.pinterest.pt/dourowineguide/">
        <FaPinterestSquare />
      </a>
      <a href="https://www.facebook.com/Douro-Wine-Guide-104963368158867">
        <FaFacebookSquare />
      </a>
      <a href="https://www.youtube.com/channel/UCxCR3rLkFD3Ejx_U4AemxDA">
        <FaYoutube />
      </a>
    </div>
  );
}
