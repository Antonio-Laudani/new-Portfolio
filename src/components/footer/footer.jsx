import '../../styles/navbar/navbar.css';
/*HO USATO LO STESSO STILE DELLA NAVBAR PER SEMPLICITA'*/ 
export default function Footer() {
  return (
    <footer className="glass-nav footer sm:footer-horizontal bg-neutral text-neutral-content items-center mt-5 p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>

            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.linkedin.com/in/antonio-laudani-25aa3a229/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <iconify-icon
            icon="mdi:linkedin"
            width="24"
            height="24"
          ></iconify-icon>
        </a>

        <a
          href="https://github.com/Antonio-Laudani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <iconify-icon
            icon="mdi:github"
            width="24"
            height="24"
          ></iconify-icon>
        </a>

        <a
          href="https://x.com/AntonioLaudani2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <iconify-icon
            icon="mingcute:social-x-line"
            width="24"
            height="24"
          ></iconify-icon>
        </a>
      </nav>
    </footer>
  );
}
