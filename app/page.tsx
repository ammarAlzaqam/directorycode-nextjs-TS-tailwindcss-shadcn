import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="home-layout-victor w-full min-h-dvh">
      <div className="main-container pt-24 md:pt-48 pb-24 w-full mt-18 flex max-lg:flex-col items-center lg:items-start justify-between gap-18">
        {/*//! Right side */}
        <div className="space-y-12">
          {/*//* text */}
          <div className="space-y-2">
            <h1 className="title max-w-2xl">
              We Build Digital{" "}
              <span className="home-bg-victor">Experiences</span>
            </h1>
            <h4 className="sub-title">
              Elevating brands through sophisticated web design, frictionless
              user experience (UX), and intelligent development for measurable
              growth.
            </h4>
          </div>

          {/*//* Buttons */}
          <div className="flex max-sm:flex-col items-start gap-2">
            <Button className="btn">Get Started</Button>
            <Button className="btn-light">View our work</Button>
          </div>
        </div>

        {/*//! Left side */}
        <div className="relative z-2 home-bg-shadow">
          <Image
            src="/assets/home/lab.png"
            alt="laptop"
            width={554}
            height={341.46}
            className=""
          />
        </div>
      </div>
    </section>
  );
}
