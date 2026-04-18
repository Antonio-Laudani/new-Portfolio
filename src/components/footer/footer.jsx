import '../../styles/navbar/navbar.css';

export default function Footer() {
  return (
    <>
      {/* Banner Iubenda SOPRA il footer */}
      <div className="flex gap-2 px-2 bg-base-200 items-center mt-auto">
        <a
          href="https://www.iubenda.com/privacy-policy/23324822"
          className="iubenda-black iubenda-noiframe iubenda-embed"
          title="Privacy Policy"
        >
          Privacy Policy
        </a>
        <a
          href="https://www.iubenda.com/privacy-policy/23324822/cookie-policy"
          className="iubenda-black iubenda-noiframe iubenda-embed"
          title="Cookie Policy"
        >
          Cookie Policy
        </a>
      </div>

      <footer className="glass-nav footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>

        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end pr-7">
          <a
            href="https://www.linkedin.com/in/antonio-laudani-25aa3a229/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <iconify-icon icon="mdi:linkedin" width="24" height="24"></iconify-icon>
          </a>

          <a
            href="https://github.com/Antonio-Laudani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <iconify-icon icon="mdi:github" width="24" height="24"></iconify-icon>
          </a>

          <a
            href="https://x.com/AntonioLaudani2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <iconify-icon icon="mingcute:social-x-line" width="24" height="24"></iconify-icon>
          </a>
        </nav>
      </footer>
    </>
  );
}