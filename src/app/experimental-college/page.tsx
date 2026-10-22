import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import vector from "@/assets/images/community/comm-vector.svg";
import Footer from "@/components/Footer";
import CollegeExplorer from "./_components/CollegeExplorer";

export const metadata: Metadata = {
    title: "Experimental College | Void Dreams",
    description: "Explore the Void Dreams Experimental College by category.",
};

export default function ExperimentalCollegePage() {
    return (
        <main className="font-syne-mono relative flex min-h-dvh w-full flex-1 flex-col items-center overflow-hidden bg-[#060000] text-white">
            <h1 className="sr-only">Experimental College</h1>

            <div className="flex w-full flex-1 flex-col">
                <CollegeExplorer />
            </div>

            <Footer />
        </main>
    );
}
