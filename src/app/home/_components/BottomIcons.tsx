"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";

type Icon = { id: string; label: string; src: StaticImageData; size: number; dim?: boolean };

export default function BottomIcons({ icons }: { icons: Icon[] }) {
    const [selected, setSelected] = useState<string | null>(null);
    const [order, setOrder] = useState(icons);

    const select = (index: number, id: string) => {
        const n = order.length;
        const mid = Math.floor(n / 2);
        const shifts = (index - mid + n) % n;
        setOrder([...order.slice(shifts), ...order.slice(0, shifts)]);
        setSelected(id);
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-x-5 md:gap-10 w-full">
            {order.map((icon, i) => {
                const isSelected = selected === icon.id;
                return (
                    <motion.button
                        key={icon.id}
                        layout
                        type="button"
                        aria-label={icon.label}
                        aria-pressed={isSelected}
                        onClick={() => select(i, icon.id)}
                        animate={{ scale: isSelected ? 1.15 : 1 }}
                        transition={{
                            scale: { type: "spring", stiffness: 300, damping: 20 },
                            layout: { type: "spring", stiffness: 260, damping: 28 },
                        }}
                        className={`shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${i === 1 ? "z-10 md:-mx-3" : ""
                            }`}
                        style={{ opacity: icon.dim && !isSelected ? 0.45 : 1 }}
                    >
                        <Image
                            src={icon.src}
                            alt=""
                            width={icon.size}
                            height={icon.size}
                            className="w-30 max-md:w-25"
                        />
                    </motion.button>
                );
            })}
        </div>
    );
}
