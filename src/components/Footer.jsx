function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 absolute bottom-0">
      <aside>
        <p>
          Zach Schwartz - {new Date().getFullYear()}
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
