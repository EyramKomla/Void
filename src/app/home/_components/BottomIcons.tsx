"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";

type Icon = { id: string; label: string; src: StaticImageData; size: number; dim?: boolean };

export default function BottomIcons({ icons }: { icons: Icon[] }) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="flex flex-wrap items-center justify-center gap-x-3 md:gap-0">
            {icons.map((icon, i) => {
                const isSelected = selected === icon.id;
                return (
                    <motion.button
                        key={icon.id}
                        type="button"
                        aria-label={icon.label}
                        aria-pressed={isSelected}
                        onClick={() => setSelected(icon.id)}
                        animate={{ scale: isSelected ? 1.15 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${i === 1 ? "z-10 md:-mx-3" : ""
                            }`}
                        style={{ opacity: icon.dim && !isSelected ? 0.45 : 1 }}
                    >
                        <Image
                            src={icon.src}
                            alt=""
                            width={icon.size}
                            height={icon.size}
                            className="max-w-30"
                        />
                    </motion.button>
                );
            })}
        </div>
    );
}
