import ThemeSwitchButton from '../ThemeButton/ThemeButton';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className="big-container bg-static rounded-md px-7 py-3 mt-16 mb-12">
      <h4>Techno Club</h4>
      <div className="my-4 flex flex-col gap-8  md:flex-row  md:justify-between">
        <div className="">
          <h3 className="mb-4">Find us on Social Media</h3>
          <ul className="flex flex-row justify-around">
            <li>
              <FaDiscord size={35} />
            </li>
            <li>
              <FaInstagram size={35} />
            </li>
            <li>
              <FaXTwitter size={35} />
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="mb-4">Explore</h3>
          <ul className="flex flex-col gap-6">
            <li>Docs</li>
            <li>Figma Plugin</li>
            <li>Dashboard Template</li>
            <li>Blog Post Template</li>
          </ul>
        </div>

        <div className="">
          <h3 className="mb-4">Lets Connect</h3>

          <ul className="flex flex-col gap-6">
            <li>Contact us</li>
            <li>Become a Contributor</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <p>
          Made with ❤ by{' '}
          <Link href="" className="link">
            @rahulgupta
          </Link>
        </p>
        <p>No cookies 🍪 Just colors 🎨 and fonts 🔡</p>
        <div className="flex flex-col justify-around">
          <span>
            Copyright © 2023 All Rights Reserved. CC BY-NC-ND License.
          </span>
          <ThemeSwitchButton />
        </div>
      </div>
    </section>
  );
};

export default Footer;
