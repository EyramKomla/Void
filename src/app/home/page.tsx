import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/images/home-bg.png";
import asterisk from "@/assets/images/asterisk.png";
import pipeline from "@/assets/images/pipeline-mark.png";
import voidDvd from "@/assets/images/void-dvd.png";
import logo from "@/assets/images/Vector.svg"
import BottomIcons from "./_components/BottomIcons";
import ig from "@/assets/images/ig.svg";
import discordh from "@/assets/images/discordh.svg"
import twitter from "@/assets/images/twitter.svg";
import Socials from "@/components/Socials";

export const metadata: Metadata = {
    title: "Home | Void Dreams",
    description: "Culture Moves When We Move.",
};

const icons = [
    { id: "community", label: "community", src: pipeline, size: 120, dim: true, href: "/community" },
    { id: "dvd", label: "Void DVD", src: voidDvd, size: 120 },
    { id: "asterisk", label: "Asterisk", src: asterisk, size: 120, dim: true },
];

const linkClass = "block hover:opacity-100 focus-visible:outline-2 focus-visible:outline-white";

export default function HomePage() {
    return (
        <main className="w-full font-syne-mono relative min-h-dvh overflow-hidden bg-black px-0 pb-0 text-white">
            <div className="absolute inset-x-0 top-0 h-[1024px] opacity-80">
                <Image src={background} alt="" fill preload sizes="100vw" className="object-cover" />
            </div>

            <div className="w-full relative h-dvh pt-4 flex flex-col items-center justify-between pb-6">
                <div className="mx-auto mb-25 rounded-b-full relative p-4 flex justify-center items-center">
                    <Image src={logo} alt="Void Logo" sizes="40vw" />
                </div>

                <h1
                    data-text="Culture Moves When We Move"
                    className="glitch font-jane-austen relative mb-25 max-w-[998px] text-center text-[2.5rem] leading-[1.15] sm:text-[4rem]"
                >
                    Culture Moves When We Move
                </h1>

                <div className="relative mx-auto">
                    <BottomIcons icons={icons} />
                </div>
            </div>


            <div className="p-8 bg-black relative mt-0 flex w-full flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1 text-center md:text-left">
                    <p className="text-base tracking-[-0.04em]">Information</p>
                    <ul className="text-sm leading-[1.2] tracking-[-0.05em] opacity-50">
                        <li><Link href="#" className={linkClass}>On Demand</Link></li>
                        <li><Link href="#" className={linkClass}>Terms &amp; Conditions</Link></li>
                        <li><Link href="#" className={linkClass}>Privacy Policy</Link></li>
                        <li><Link href="/community" className={linkClass}>Community</Link></li>
                    </ul>
                </div>

                <div className="order-first flex w-[200px] flex-col items-center md:order-none">
                    <span className="text-[1.375rem] tracking-[-0.04em]">JOIN US</span>
                    <Socials />
                    <p className="mt-[6px] text-[0.9375rem] tracking-[-0.04em] opacity-40">
                        Copyright Void Dreams 2019
                    </p>
                </div>

                <div className="space-y-1 text-center md:text-left">
                    <p className="text-base tracking-[-0.04em]">Contacts</p>
                    <ul className="text-sm leading-[1.2] tracking-[-0.05em] opacity-50">
                        <li><Link href="#" className={linkClass}>On Demand</Link></li>
                        <li><Link href="#" className={linkClass}>Terms &amp; Conditions</Link></li>
                        <li><Link href="#" className={linkClass}>Privacy Policy</Link></li>
                        <li><Link href="/experimental-college" className={linkClass}>Experimental College</Link></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
