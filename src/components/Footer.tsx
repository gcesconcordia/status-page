import Image from "next/image";

const Footer = () => {
  const time = new Date().getFullYear();
  return (
    <footer className="footer absolute bottom-0 bg-neutral-900 p-10 text-white">
      <div>
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full">
          <Image src="/logo.webp" fill={true} className="" alt="logo"></Image>
        </div>
        <p className="font-bold">Gina Cody School Entrepreneurship Society</p>
        <p>Concordia University, Montreal, QC. Canada</p>
        <p>All rights reserved &copy; {time}</p>
      </div>
      <div>
        <span className="footer-title">Organization</span>
        <a href="/learn-more" className="link link-hover">
          About Us
        </a>
        <a href="/contact" className="link link-hover">
          Contact
        </a>
        <a href="/work-with-us" className="link link-hover">
          Sponsorship
        </a>
        <a href="/resource-hub" className="link link-hover">
          Resource Hub
        </a>
        <a href="/meet-the-team" className="link link-hover">
          Meet the Team
        </a>
        <a href="/apply" className="link link-hover">
          Apply to join
        </a>
      </div>
      <div>
        <span className="footer-title">Events</span>
        <a href="/upstart" className="link link-hover">
          UpStart 2024
        </a>
        <a href="/upstart/2023" className="link link-hover">
          UpStart 2023
        </a>
        <a
          href="https://www.concordia.ca/ginacody/students/funding-research-opportunities/innovation-fund.html"
          className="link link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Innovation Fund
        </a>
      </div>
      <div>
        <span className="footer-title">Community</span>
        <a href="https://discord.gg/JRdmRk8Cc7" className="link link-hover">
          Join GCES Discord
        </a>
        <a href="/coming-soon" className="link link-hover">
          Join UpStart Discord
        </a>
      </div>
    </footer>
  );
};

export default Footer;
