import GridSection from './sections/GridSection';
import Image from 'next/image';
import heroImg from '@/public/hero-img.svg';
import innovate from '@/public/innovation.svg';
import inclusive from '@/public/inclusive.svg';
import collab from '@/public/pairCode.svg';
import Link from 'next/link';
import TestimonialSection from './sections/TestimonialSection';
import FaqSection from './sections/FaqSection';

export default function Home() {
  return (
    <>
      <section className="big-container">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div>
            <h1 className="fs-heading">Welcome to PCTE Techno Club</h1>
            <p>Explore the world of technology with us!</p>
            <p>Join our community to learn, collaborate, and innovate.</p>

            <div className="mt-12 flex flex-col md:flex-row gap-3">
              <Link href="/team">
                <button className="secondary-btn">Join now</button>
              </Link>
              <Link href="/events">
                <button className="primary-btn">Discover Events</button>
              </Link>
            </div>
          </div>

          <div className="p-8">
            <Image
              src={heroImg}
              alt="programming image of my hero section"
              priority
            />
          </div>
        </div>
      </section>

      <section className="big-container">
        <h2 className="text-center mb-4">Our Goals</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-4 py-6 gap-4 flex flex-col justify-between bg-static rounded-md">
            <Image src={innovate} alt="illustration of a video" className="" />
            <h4>Innovation.</h4>
            <p>
              At Techno Club, we wholeheartedly embrace innovation as a core
              value. We believe in pushing the boundaries of what's possible in
              the world of technology. Innovation is not just a buzzword for us;
              it's a way of life.
            </p>
          </div>
          <div className="px-4 py-6 gap-4 flex flex-col justify-between bg-static rounded-md">
            <Image src={collab} alt="illustration of a video" className="" />
            <h4>Collaboration.</h4>
            <p>
              Collaboration is at the heart of everything we do. We understand
              that the most significant achievements in technology are rarely
              accomplished alone. As a community, we foster a spirit of teamwork
              and camaraderie.
            </p>
          </div>
          <div className="px-4 py-6 gap-4 flex flex-col justify-between bg-static rounded-md">
            <Image src={inclusive} alt="illustration of a video" className="" />
            <h4>Inclusivity.</h4>
            <p>
              Inclusivity is one of our foundational principles. We welcome
              individuals from all backgrounds, experiences, and walks of life.
              We understand that diversity drives innovation, and our club is a
              safe, welcoming space for everyone.
            </p>
          </div>
        </div>
      </section>

      <GridSection />
      <section className="big-container">
        <div className="bg-secondary rounded-md gap-8 flex flex-col lg:flex-row py-12 px-4 lg:py-16 lg:px-8">
          <div>
            <h3>Explore the World of Tech </h3>
            <h4>Unlock the Power of Programming and Innovation</h4>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:w-[50rem] md:grid-cols-2">
            <div>
              <p>
                Dive into the world of coding by starting with fundamental
                languages and concepts.
              </p>
            </div>

            <div>
              <p>
                Choose your programming focus, whether it's web development, app
                development, data science, or cybersecurity.
              </p>
            </div>

            <div>
              <p>
                Explore advanced topics and technologies. Accentuate your skills
                by participating in hackathons and projects.
              </p>
            </div>

            <div>
              <p>
                Ready to showcase your talents? Join coding competitions,
                contribute to open-source projects, and collaborate with fellow
                tech enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <FaqSection />

      <section className="big-container">
        <div className="text-center mb-12">
          <h2>Club Insights and Knowledge</h2>
          <h4>
            Explore our featured articles and stay updated on the latest tech
            trends.
          </h4>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="bg-static rounded-md p-8 shadow-xl">
            <h4>The Future of Artificial Intelligence in Education</h4>
            <p>
              Discover how AI is shaping the education landscape and what it
              means for students.
            </p>
          </div>
          <div className="bg-static rounded-md p-8 shadow-xl">
            <h4>Coding Bootcamps: A Pathway to Tech Careers</h4>
            <p>
              Explore the benefits of coding bootcamps and how they can
              kickstart your career in technology.
            </p>
          </div>
          <div className="bg-static rounded-md p-8 shadow-xl">
            <h4>The Rise of Cybersecurity: Protecting the Digital Frontier</h4>
            <p>
              Learn about the importance of cybersecurity and its role in
              safeguarding our online world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
