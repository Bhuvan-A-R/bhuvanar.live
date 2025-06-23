// link (next js)
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

// framer motion
import { motion } from "framer-motion";

// next hooks
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "home" },
  // { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
  { path: "/admin/login", name: "Admin" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onLinkClick }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            onClick={onLinkClick}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
      <Link
        href="/resume.pdf"
        target="_blank"
        className={`${linkStyles} flex items-center capitalize`}
      >
        Resume
        <RiArrowRightUpLine className="ml-1 flex animate-bounce text-primary dark:text-primary" />
      </Link>
    </nav>
  );
};

export default Nav;
