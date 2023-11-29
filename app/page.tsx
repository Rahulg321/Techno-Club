import GridSection from './sections/GridSection';
import Image from 'next/image';
import heroImg from '@/public/hero-img.svg';
import videoUpload from '@/public/video-upload.svg';

import TestimonialSection from './sections/TestimonialSection';
import FaqSection from './sections/FaqSection';

export default function Home() {
  return (
    <>
      <section className="big-container">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
          <div>
            <h1 className="fs-heading">Welcome to PCTE Techno Club</h1>
            <p>Choosing colors or typography for your website?</p>
            <p>Use the Toolbar below to realize your choices.</p>

            <div className="mt-12 flex flex-col md:flex-row gap-3">
              <button className="secondary-btn">Get Started</button>
              <button className="primary-btn">Learn about us</button>
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
            <Image
              src={videoUpload}
              alt="illustration of a video"
              className=""
            />
            <h4>Innovation.</h4>
            <p>
              At Techno Club, we wholeheartedly embrace innovation as a core
              value. We believe in pushing the boundaries of what's possible in
              the world of technology. Innovation is not just a buzzword for us;
              it's a way of life.
            </p>
          </div>
          <div className="px-4 py-6 gap-4 flex flex-col justify-between bg-static rounded-md">
            <Image
              src={videoUpload}
              alt="illustration of a video"
              className=""
            />
            <h4>Collaboration.</h4>
            <p>
              Collaboration is at the heart of everything we do. We understand
              that the most significant achievements in technology are rarely
              accomplished alone. As a community, we foster a spirit of teamwork
              and camaraderie.
            </p>
          </div>
          <div className="px-4 py-6 gap-4 flex flex-col justify-between bg-static rounded-md">
            <Image
              src={videoUpload}
              alt="illustration of a video"
              className=""
            />
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
            <h3>How Does it Work?</h3>
            <h4>Get your personalized color palette in 4 steps.</h4>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:w-[50rem] md:grid-cols-2">
            <div>
              <p>
                Start with two neutral colors for the text and the background.
              </p>
            </div>

            <div>
              <p>
                Choose your primary and secondary colors. Primary is for main
                CTAs and sections, and Secondary is for less important buttons
                and info cards.
              </p>
            </div>

            <div>
              <p>
                Accent color is an additional color. It appears in images,
                highlights, hyperlinks, boxes, cards, etc.
              </p>
            </div>

            <div>
              <p>
                Happy with the results? Press on “Export” and choose among
                different options to export in various formats, like .zip, .png,
                CSS, SCSS, QR Code, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <FaqSection />

      <section className="big-container">
        <div className="text-center mb-12">
          <h2>Featured Articles</h2>
          <h4>Just some interesting guides and posts.</h4>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="bg-static rounded-md p-8">
            <p>Examples of colors from popular sites</p>
          </div>
          <div className="bg-static rounded-md p-8">
            <p>How to select colors</p>
          </div>
          <div className="bg-static rounded-md p-8">
            <p>Learn more about the releases</p>
          </div>
        </div>
      </section>

      <section className="big-container">
        <div className="text-center">
          <h2>Your journey shouldnt end here</h2>
          <h4>Subscribe to out newsletter to learn more about us.</h4>
          <button className="primary-btn">Subscribe</button>
        </div>
      </section>
    </>
  );
}
