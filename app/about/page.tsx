import { Button } from "@/components/ui/button";
import about_pillars from "@/constants/about-pillars";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function About() {
  return (
    <section className="about-layout-victor w-full min-h-dvh">
      <div className="main-container pt-32 sm:pt-48 pb-24 w-full space-y-10">
        {/*//! Head text */}
        <div>
          <h1 className="head-text about-bg-victor w-fit pe-2 md:pe-4">
            Your Concept..Our Creation
          </h1>
          <h4 className="des max-w-[1190px]">
            At Directory Code, we blend creativity with technology to build
            solutions that stand the test of time
          </h4>
        </div>

        {/*//! Who We Are (sec) */}
        <div className="justify-between flex lg:gap-10 max-lg:flex-col max-lg:items-center max-lg:mt-15">
          <Image
            src="/assets/about/sec1.png"
            alt="about-directory-1"
            width={528}
            height={511}
          />
          <div className="about-bg-question flex flex-col gap-5 items-center justify-center max-lg:pt-20!">
            <h2 className="title text-center">Who we are?</h2>
            <h4 className="des text-center max-w-[500px]">
              We’re a team of creative developers and designers turning digital
              ideas into real experiences
            </h4>
            <Button className="btn">View Our Work</Button>
          </div>
        </div>

        {/*//! Brand Mastery (sec) */}
        <div className="justify-between flex max-lg:flex-col max-lg:items-center gap-10 max-lg:mt-5 -mt-10">
          <div className="flex flex-col gap-5 items-center justify-center pt-20!">
            <h2 className="title w-full">Brand Mastery</h2>
            <h4 className="des max-w-[683px]">
              We don’t just build websites — we craft digital identities that
              speak for your brand. Our approach combines design, strategy, and
              technology to make your presence unforgettable. From visual
              storytelling to user experience, every pixel is a reflection of
              your brand’s essence.
            </h4>
          </div>

          <Image
            src="/assets/about/sec2.png"
            alt="about-directory-1"
            width={391}
            height={480.61}
          />
        </div>

        {/*//! Pillars of Our Success */}
        <div className="flex max-lg:flex-col space-between items-center gap-10 ">
          {/*//* Text */}
          <div className="flex flex-col items-center gap-8">
            <div className="space-y-2">
              <h1 className="title max-w-[469px]">
                Pillars <span className="lowercase tracking-normal">of</span>{" "}
                our <span>success</span>
              </h1>

              <h4 className="des max-w-[651px]">
                Our success is built on core values that define who we are and
                how we deliver excellence
              </h4>
            </div>
            <Button className="btn">DISCOVER OUR SERVICES</Button>
          </div>

          {/*//* Pillars */}
          <div className="mt-7">
            {about_pillars.map(({ icon, title, des }, index) => (
              <div key={title} className="flex gap-1.5">
                {/* side line */}
                <div
                  className={
                    about_pillars.length === index + 1
                      ? "w-2.5"
                      : "about-side_line"
                  }
                />

                {/* data */}
                <div
                  className={cn(
                    "-mt-5 sm:-mt-7",
                    about_pillars.length === index + 1 ? "" : "mb-[30px] sm:mb-[38px]"
                  )}
                >
                  <div className="w-52 sm:w-[281px] sm:p-2 flex items-center gap-2">
                    <img
                      src={icon}
                      alt={`${title}-icon`}
                      className="max-sm:scale-70"
                    />
                    <h3 className="flex-1 text-base max-sm:text-[25px]! text-center">
                      {title}
                    </h3>
                  </div>
                  <h4 className="des ps-2 max-sm:max-w-[250px]">{des}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
