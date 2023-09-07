import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa"; // Importa los íconos de react-icons

export default function SocialIcons() {
  return (
    <div className="flex gap-4 mb-28 justify-center">
      <Link href="https://github.com/Reoobot" target="_blank" rel="noopener noreferrer">
        <FaGithub size={32} color="#333" />
      </Link>
      <Link href="https://www.linkedin.com/in/freddy-vegas" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} color="#0077B5" />
      </Link>
      <Link href="mailto:vegasfalexis@gmail.com">
        <FaEnvelope size={32} color="#D44638" />
      </Link>
      <Link href="https://www.facebook.com/freddy.vegas.58" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={32} color="#1877F2" />
      </Link>
    </div>
  );
}
