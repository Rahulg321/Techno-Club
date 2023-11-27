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
            <Image src={heroImg} alt="programming image of my hero section" />
          </div>
        </div>
      </section>

      <section className="big-container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-12 py-6 flex flex-col justify-between bg-static rounded-md">
            <Image
              src={videoUpload}
              alt="illustration of a video"
              className="mb-4"
            />
            <h4>Saves time</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam error fugiat ea eum fugit consequuntur debitis, magni
              quibusdam exercitatio
            </p>
          </div>
          <div className="px-12 py-6 flex flex-col justify-between bg-static rounded-md">
            <Image
              src={videoUpload}
              alt="illustration of a video"
              className="mb-4"
            />
            <h4>Saves time</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam error fugiat ea eum fugit consequuntur debitis, magni
              quibusdam exercitatio
            </p>
          </div>
          <div className="px-12 py-6 flex flex-col justify-between bg-static rounded-md">
            <Image
              src={videoUpload}
              alt="illustration of a video"
              className="mb-4"
            />
            <h4>Saves time</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam error fugiat ea eum fugit consequuntur debitis, magni
              quibusdam exercitatio
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
          <h4>Follow me on social media to stay tuned on more projects.</h4>
          <button className="primary-btn">Stay tuned</button>
        </div>
      </section>
    </>
  );
}
