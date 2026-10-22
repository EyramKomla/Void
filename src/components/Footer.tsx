import Image from "next/image";
import Link from "next/link";
import footerArt from "@/assets/images/community/comm-footer-art.svg";
import Socials from "./Socials";

const linkClass = "block hover:opacity-100 focus-visible:outline-2 focus-visible:outline-white";

export default function Footer() {
    return (
        <footer className="relative mt-14 w-full overflow-hidden pb-3 md:mt-8">
            <Image src={footerArt} alt="" className="pointer-events-none absolute inset-x-0 bottom-0 h-full w-full object-cover object-top" />

            <div className="relative flex flex-row justify-center gap-12 px-8 pt-14 max-md:flex-col max-md:items-center max-md:gap-y-15 md:px-[107px]">

                <div className="text-center md:text-left flex-1 max-md:w-full">
                    <p className="text-[1.375rem] tracking-[-0.04em]">Navigation</p>
                    <ul className="text-sm leading-[1.2] tracking-[-0.05em] opacity-50">
                        <li><Link href="/home" className={linkClass}>Home</Link></li>
                        <li><Link href="#" className={linkClass}>Gallery</Link></li>
                        <li><Link href="#" className={linkClass}>FAQ</Link></li>
                    </ul>
                </div>

                <div className="order-first flex w-full max-w-[462px] flex-1 flex-col max-md:gap-y-5 items-center text-center md:order-none">
                    <p className="text-xl tracking-[-0.04em]">EMAIL SIGN UP</p>
                    <p className="mt-3 text-base tracking-[-0.05em]">
                        Sign up for Newsletters and Reminders about <br className="hidden md:block" />
                        products and Community Activations
                    </p>
                    <input className="mt-8 w-full border-b border-white pb-1 text-left text-xl tracking-[-0.05em]" placeholder="EMAIL" type="email" />
                    <button
                        type="button"
                        className="button3d h-10"
                    >
                        SIGN UP
                    </button>
                </div>


                <div className="flex flex-col items-center gap-6 md:items-end flex-1">
                    <div className="flex flex-col items-center md:items-start w-[135px]">
                        <span className="text-[1.375rem] tracking-[-0.04em] md:pl-0">JOIN US</span>
                        <Socials />
                    </div>
                    <div className="space-y-1 w-[143px] md:pl-2 text-center md:text-left">
                        <p className="text-base tracking-[-0.04em]">Contacts</p>
                        <ul className="text-sm leading-[1.2] tracking-[-0.05em] opacity-50">
                            <li><Link href="#" className={linkClass}>Terms &amp; Conditions</Link></li>
                            <li><Link href="#" className={linkClass}>Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className="relative mt-8 text-center text-[0.9375rem] tracking-[-0.04em] opacity-40">Copyright Void Dreams 2019</p>
        </footer>
    );
}
