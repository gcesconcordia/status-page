import Image from "next/image";

const Footer = () => {
  const time = new Date().getFullYear();
  return (
    <footer className="footer bg-neutral-900 p-10 text-white">
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
        <a href="https://gcesconcordia.com/learn-more" className="link link-hover">
          About Us
        </a>
        <a href="https://gcesconcordia.com/contact" className="link link-hover">
          Contact
        </a>
        <a href="https://gcesconcordia.com/work-with-us" className="link link-hover">
          Sponsorship
        </a>
        <a href="https://gcesconcordia.com/resource-hub" className="link link-hover">
          Resource Hub
        </a>
        <a href="https://gcesconcordia.com/meet-the-team" className="link link-hover">
          Meet the Team
        </a>
        <a href="https://gcesconcordia.com/apply" className="link link-hover">
          Apply to join
        </a>
      </div>
      <div>
        <span className="footer-title">Events</span>
        <a href="https://gcesconcordia.com/upstart" className="link link-hover">
          UpStart 2024
        </a>
        <a href="https://gcesconcordia.com/upstart/2023" className="link link-hover">
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
