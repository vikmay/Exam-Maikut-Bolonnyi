import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div>
      <Image
        src="/../../../public/Logo.png"
        alt="Logo"
        width={500}
        height={300}
      />
        <nav>
          <ul>
            <li>
              <a href="location1.html">Location 1</a>
            </li>
            <li>
              <a href="location2.html">Location 2</a>
            </li>
            <li>
              <a href="location3.html">Location 3</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Footer;
