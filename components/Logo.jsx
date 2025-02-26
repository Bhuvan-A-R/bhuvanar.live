import React from "react";
import Link from "next/link";
import Image from "next/image";

const logo = ({ onLinkClick }) => {
  return (
    <Link href="/" onClick={onLinkClick}>
      <Image src="/nav-avatar.png" width={100} height={100} priority alt="logo" />
    </Link>
  );
};

export default logo;
