
const Navbar = () => {
    const links = [
    "Home",
    "About",
    "Projects",
    "Skills",
    "Achievements/Certifications",
    "Experience",
    "Extracurricular",
    "Contact"
  ];
  return (
    <nav >
      {links.map((link) => (
        <a key={link} href={`#${link}`} >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}
    </nav>
  )
}

export default Navbar