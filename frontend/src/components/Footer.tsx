import Link from "next/link";

const Footer = () => {
  return (
    <footer className="rounded-2xl bg-black/90 overflow-hidden py-10 px-5 sm:px-8 lg:px-16 mb-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Logo / Title */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h3 className="text-white text-2xl sm:text-3xl font-bold">
              <Link
                href="https://www.flolabsinnovations.com/"
                target="_blank"
                rel="noopener noreferrer">
                FloLabs Innovations Group
              </Link>
            </h3>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h4 className="text-white text-xl sm:text-2xl font-semibold">
              Company
            </h4>
            <Link
              href="https://hephaestus.international/internships"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-base hover:text-white transition">
              Internships
            </Link>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h4 className="text-white text-xl sm:text-2xl font-semibold">
              <Link href="/projects">Projects</Link>
            </h4>

            <div className="flex flex-col gap-4 text-gray-300 text-base">
              <Link href="/projects" className="hover:text-white transition">
                CAIPO as a Space Buddy
              </Link>
              <Link href="/projects" className="hover:text-white transition">
                CAIPO Space Buddy as a Consumer App
              </Link>
              <Link href="/projects" className="hover:text-white transition">
                Mood Changer
              </Link>
              <Link href="/projects" className="hover:text-white transition">
                Space Travel Agency & Space Tourism Marketplace
              </Link>
            </div>
          </div>

          {/* Legal + Social */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xl sm:text-2xl font-semibold">
                Legal
              </h4>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition">
                Who we are
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xl sm:text-2xl font-semibold text-center md:text-left">
                Follow Us
              </h4>

              <div className="flex justify-center md:justify-start gap-6">
                <Link
                  href="https://www.linkedin.com/company/flo-labs-r-d/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition">
                  {/* LinkedIn Icon */}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="34" height="34" rx="8" fill="#0A66C2" />
                    <path
                      d="M24.5326 28.9111H28.42C28.7134 28.9111 28.9512 28.6734 28.9512 28.38L28.9532 20.1666C28.9532 15.8737 28.0282 12.5739 23.0115 12.5739C21.1044 12.5031 19.306 13.4861 18.3355 15.1277V13.5015C18.3355 13.2082 18.0978 12.9703 17.8043 12.9703H14.0361C13.7427 12.9703 13.5049 13.2082 13.5049 13.5015V28.3792C13.5049 28.6727 13.7427 28.9104 14.0361 28.9104H17.9233C18.2167 28.9104 18.4545 28.6727 18.4545 28.3792V21.025C18.4545 18.9455 18.849 16.9317 21.427 16.9317C23.9684 16.9317 24.0013 19.3111 24.0013 21.1596V28.3798C24.0013 28.6732 24.2392 28.9111 24.5326 28.9111Z"
                      fill="white"
                    />
                    <path
                      d="M7.91989 10.7915C9.49535 10.7914 10.7917 9.49414 10.7917 7.91868C10.7914 6.34322 9.4949 5.04688 7.91928 5.04688C6.34352 5.04688 5.04688 6.34352 5.04688 7.91928C5.04688 9.49504 6.34412 10.7915 7.91989 10.7915Z"
                      fill="white"
                    />
                    <path
                      d="M5.9707 28.9115H9.86305C10.1565 28.9115 10.3943 28.6736 10.3943 28.3802V13.5019C10.3943 13.2086 10.1565 12.9707 9.86305 12.9707H5.9707C5.67731 12.9707 5.43945 13.2086 5.43945 13.5019V28.3802C5.43945 28.6736 5.67731 28.9115 5.9707 28.9115Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
