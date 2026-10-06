import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Syne_Mono } from "next/font/google";
import background from "@/assets/images/VS Backgrounds 1.jpg";
import globe from "@/assets/images/globe.png";

const syneMono = Syne_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Warning | Void Dreams",
    description: "You are entering a virtual extension of the Void Dreams universe.",
};

export default function WarningPage() {
    return (
        <main
            className={`font-syne-mono relative flex min-h-dvh flex-1 items-center justify-center overflow-hidden bg-black px-4 py-8 text-white sm:px-8 sm:py-12`}
        >
            <Image
                src={background}
                alt=""
                fill
                preload
                placeholder="blur"
                sizes="100vw"
                className="object-cover opacity-80"
            />

            <div className="relative flex w-full max-w-[958px] flex-col md:min-h-[575px] md:flex-row">
                <section className="flex items-center justify-center md:rounded-2xl border border-white bg-[#1d7499] p-6 md:w-[42.6%] md:shrink-0">
                    <Image
                        src={globe}
                        alt="Void Dreams globe"
                        preload
                        sizes="(min-width: 768px) 355px, 240px"
                        className="aspect-square w-60 [image-rendering:pixelated] md:w-[355px]"
                    />
                </section>

                <section className="flex flex-1 flex-col items-center justify-center md:rounded-2xl border border-[#d9d9d9] bg-[#1d7499] px-6 py-12 text-center md:py-16">
                    <h1 className="text-[2.25rem] leading-[1.2] md:text-[2.8125rem]">WARNING</h1>

                    <div className="mt-8 max-w-[301px] space-y-[1.2em] text-sm leading-[1.2] tracking-[-0.05em] md:mt-[38px]">
                        <p>You are entering a virtual extension of the Void Dreams universe.</p>
                        <p>
                            This is a conceptual artistic project created to deliver a unique experience for our
                            community. To achieve this, we intentionally use specific language, symbolism, and
                            messaging as tools for worldbuilding and storytelling.
                        </p>
                        <p>
                            Void Dreams does not seek to create division or encourage hostility. Instead, we use
                            these creative devices to provoke thought, challenge assumptions, and spark
                            conversations we believe are important to the future of culture, creativity, and
                            community.
                        </p>
                    </div>

                    <Link
                        href="/home"
                        className="mt-12 flex h-[38px] w-44 items-center justify-center rounded bg-[#d9d9d9] text-[1.375rem] leading-[1.2] tracking-[-0.1em] text-black shadow-[3px_3px_2px_rgba(87,87,87,0.95),1.5px_-3px_2px_#fff] transition-transform hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_1px_rgba(87,87,87,0.95)] md:mt-[77px]"
                    >
                        ENTER VOID
                    </Link>
                </section>
            </div>
        </main>
    );
}