import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import background from "@/assets/images/home-bg.png";
import asterisk from "@/assets/images/asterisk.png";
import pipeline from "@/assets/images/pipeline-mark.png";
import voidDvd from "@/assets/images/void-dvd.png";
import joinIcons from "@/assets/images/join-icons.svg";
import AsteriskNav from "@/components/AsteriskNav";
import BottomIcons from "./_components/BottomIcons";

export const metadata: Metadata = {
    title: "Home | Void Dreams",
    description: "Culture Moves When We Move.",
};

const icons = [
    { id: "pipeline", label: "Pipeline Comm", src: pipeline, size: 120, dim: true },
    { id: "dvd", label: "Void DVD", src: voidDvd, size: 120 },
    { id: "asterisk", label: "Asterisk", src: asterisk, size: 120, dim: true },
];

const linkClass = "block hover:opacity-100 focus-visible:outline-2 focus-visible:outline-white";

export default function HomePage() {
    return (
        <main className="w-full font-syne-mono relative flex min-h-dvh flex-1 flex-col items-center overflow-hidden bg-black px-0 pb-0 text-white">
            <div className="absolute inset-x-0 top-0 h-[1024px] opacity-80">
                <Image src={background} alt="" fill preload sizes="100vw" className="object-cover" />
            </div>

            <div className="mx-auto mb-25 min-h-24 bg-black rounded-b-full relative p-4 flex justify-center items-center">
                <AsteriskNav size={300} />
            </div>

            <h1
                data-text="Culture Moves When We Move"
                className="glitch font-jane-austen relative mt-16 mb-25 max-w-[998px] text-center text-[2.5rem] leading-[1.15] sm:text-[4rem] md:mt-[140px]"
            >
                Culture Moves When We Move
            </h1>

            <div className="relative mx-auto mt-16 md:mt-[170px]">
                <BottomIcons icons={icons} />
            </div>

            <div className="p-8 bg-black relative mt-16 flex w-full flex-col items-center gap-10 md:mt-[111px] md:flex-row md:items-start md:justify-between">
                <div className="space-y-1 text-center md:text-left">
                    <p className="text-base tracking-[-0.04em]">Information</p>
                    <ul className="text-sm leading-[1.2] tracking-[-0.05em] opacity-50">
                        <li><Link href="#" className={linkClass}>On Demand</Link></li>
                        <li><Link href="#" className={linkClass}>Terms &amp; Conditions</Link></li>
                        <li><Link href="#" className={linkClass}>Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="order-first flex w-[200px] flex-col items-center md:order-none">
                    <span className="text-[1.375rem] tracking-[-0.04em]">JOIN US</span>
                    <Image src={joinIcons} alt="" width={144} height={48} className="mt-[5px]" />
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
                    </ul>
                </div>
            </div>
        </main>
    );
}
