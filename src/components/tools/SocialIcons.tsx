"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebookF, href: "https://facebook.com" },
  { icon: FaTwitter, href: "https://twitter.com" },
  { icon: FaLinkedinIn, href: "https://linkedin.com" },
  { icon: FaPinterestP, href: "https://pinterest.com" },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-4 mt-8 justify-center">
      {socialLinks.map((s, i) => {
        const Icon = s.icon;
        return (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500 text-white hover:scale-110 transition-transform shadow-lg"
          >
            <Icon className="text-lg" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;