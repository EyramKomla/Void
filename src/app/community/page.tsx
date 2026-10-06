import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/assets/images/community/comm-hero-bg-7ff329.png";
import texture from "@/assets/images/community/comm-texture.png";
import emblem from "@/assets/images/community/comm-emblem.png";
import idFront from "@/assets/images/community/id-front.png";
import idBack from "@/assets/images/community/id-back.png";
import discord from "@/assets/images/community/discord.svg";
import vector from "@/assets/images/community/comm-vector.svg";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
    title: "Community | Void Dreams",
    description: "Seek asylum. Join the Void Dreams community.",
};

const navLinks = ["Gallery", "Blog", "Opportunities"];
const fields = ["ALTER EGO", "WYA", "WORK"];

const buttonClass =
    "h-[38px] cursor-pointer rounded-[4px] bg-[#D9D9D9] text-[22px] tracking-[-0.1em] text-black shadow-[inset_3px_2px_4px_rgba(0,0,0,0.25),-1px_1px_2px_rgba(87,87,87,0.95),0_-1px_2px_#fff]";

export default function CommunityPage() {
    return (
        <main className="font-syne-mono relative flex min-h-dvh w-full text-[20px] flex-1 flex-col items-center overflow-hidden bg-[#060000] text-white">
            <div className="absolute inset-x-0 top-0 h-162.5">
                <Image src={heroBg} alt="" fill preload sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <Image
                src={texture}
                alt=""
                aria-hidden
                className="pointer-events-none absolute top-[723px] left-1/2 h-[2500px] w-[2500px] max-w-none -translate-x-1/2 opacity-[0.21]"
            />

            <nav className="relative flex w-full flex-wrap gap-6 px-6 pt-[53px] text-xl tracking-[-0.05em] md:gap-[28px] md:px-[52px]">
                {navLinks.map((label) => (
                    <Link key={label} href="#" className="hover:opacity-70 focus-visible:outline-2 focus-visible:outline-white">
                        {label}
                    </Link>
                ))}
            </nav>

            <Image src={vector} alt="" aria-hidden className="pointer-events-none absolute top-[818px] right-[62px] hidden md:block" />

            <section className="relative top-20 mt-16 flex w-full flex-col gap-y-16 items-center px-4 md:mt-[100px]">
                <h1 className="font-spray-letters text-center text-[4rem] leading-none tracking-[-0.05em] sm:text-[6rem] md:text-[8rem]">
                    SEEK ASYLUM
                </h1>
                <Link href="#" aria-label="Join our Discord" className="block focus-visible:outline-2 focus-visible:outline-white md:mt-16">
                    <Image src={discord} alt="" width={96} height={94} />
                </Link>
                <Image src={emblem} alt="" aria-hidden width={674} height={674} className="mt-4 h-auto w-full max-w-[674px]" />
            </section>

            <p className="relative mt-16 max-w-[850px] px-6 text-center leading-[1.3] whitespace-pre-line md:mt-[100px] md:text-[20px]">
                {`Void Dreams is the future of African popular culture—a forward movement forged in art, fashion, creativity, and innovation.
We are here to connect, inspire, and empower. To build a living, breathing community that thrives on individuality, collaboration, and cultural evolution.
At our core is a growing community of creatives: thinkers, makers, rebels, and visionaries. Through our Discord hub, we offer a space to share resources, spark dialogue, and cultivate groundbreaking ideas. We listen, we learn, we collaborate. Together, we solve the challenges that hold back our creative ecosystem.
Void Dreams is a launchpad for untapped talent. We shine a light on the overlooked. We amplify unheard voices. When we create, we create together—and we put our people on.
This is not just culture. This is counterculture. A quiet rebellion, driven by the youth, rising to reclaim the narrative and reshape the future on our own terms.
We are here to ignite a creative revolution. To empower, uplift, and inspire a generation that refuses to wait its turn. We are building an ecosystem where young African visionaries don’t just survive—they thrive.
Void Dreams exists to uplift, to challenge, and to create space for people to dream freely and build boldly.`}
            </p>

            <section className="relative mt-24 flex w-full flex-col items-center px-4 md:mt-[80px]">
                <h2 className="text-center text-5xl tracking-[-0.05em] md:text-[60px]">REBELZ ID</h2>
                <p className="mt-1 text-xl tracking-[-0.05em] text-[#AAAAAA]">ID GENERATOR</p>

                <div className="mt-12 flex w-full max-w-[1100px] flex-col items-center gap-10 md:flex-row md:justify-center md:gap-4">
                    <figure className="flex w-full max-w-[488px] flex-col items-center">
                        <Image src={idFront} alt="Rebelz ID, front" className="h-auto w-full" />
                        <figcaption className="-mt-10 text-xl tracking-[-0.05em]">FRONT</figcaption>
                    </figure>
                    <figure className="flex w-full max-w-[502px] flex-col items-center">
                        <Image src={idBack} alt="Rebelz ID, back" className="h-auto w-full" />
                        <figcaption className="-mt-10 text-xl tracking-[-0.05em]">BACK</figcaption>
                    </figure>
                </div>

                <div className="mt-12 flex w-full max-w-[562px] flex-col gap-[70px]">
                    {fields.map((label) => (
                        <input
                            key={label}
                            type="text"
                            aria-label={label}
                            placeholder={label}
                            className="w-full border-0 border-b border-white bg-transparent pb-1 text-xl tracking-[-0.05em] text-white outline-none placeholder:text-white focus-visible:border-b-2"
                        />
                    ))}
                </div>

                <div
                    role="presentation"
                    className="mt-24 flex h-[241px] w-[263px] items-center justify-center rounded-[5px] bg-[#D9D9D9] px-14 text-center text-[15px] leading-[1.2] tracking-[-0.04em] text-[#160000] shadow-[inset_-5px_3px_2px_rgba(0,0,0,0.3)]"
                >
                    Drag your image here
                    <br />
                    or click to browse
                </div>

                <button type="button" className={`button3d mt-14 w-[176px]`}>
                    GENERATE
                </button>

                <p className="mt-16 max-w-[613px] px-2 text-center text-xl leading-[1.2] tracking-[-0.04em]">
                    This ID is not a marketing campaign aimed at getting random people into our community. This ID is an important part of the Void Dreams world reserved for people who resonate with our mission and those who want to participate in the growth of the community long term.
                </p>
            </section>

            <Footer />
        </main>
    );
}
