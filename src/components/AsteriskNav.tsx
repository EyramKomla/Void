"use client";

import { useRef, useState, type MouseEvent } from "react";
import { useRouter } from "next/navigation";
import {
    animate,
    motion,
    useMotionValue,
    useReducedMotion,
    useTransform,
    type MotionValue,
} from "motion/react";

export type AsteriskNavItem = { label: string | React.ReactNode; href: string, idx?: number };

export const defaultNavItems: AsteriskNavItem[] = [
    { label: "All Access DvD", href: "#", idx: 5 },
    { label: "Community Page", href: "/community", idx: 1 },
    { label: <p>Experimental <br /> College</p>, href: "#", idx: 2 },
    { label: "On Demand", href: "#", idx: 3 },
    { label: "Archive", href: "#", idx: 4 },
];

const GLOW = "#273D26";

type Props = {
    items?: AsteriskNavItem[];
    /** Width/height of the asterisk in px. */
    size?: number;
    className?: string;
};

function Arm({
    item,
    angle,
    length,
    rotation,
    active,
    onSelect,
}: {
    item: AsteriskNavItem;
    angle: number;
    length: number;
    rotation: MotionValue<number>;
    active: boolean;
    onSelect: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
    // Flip label when arm points downward so it never reads upside down
    const textRotate = useTransform(rotation, (r) => {
        const a = (((angle + r) % 360) + 360) % 360;
        return a > 90 && a < 270 ? 90 : -90;
    });

    return (
        <div
            className="absolute top-1/2 left-1/2 h-0 w-0"
            style={{ transform: `rotate(${angle}deg)`, zIndex: active ? 1 : 0 }}
        >
            <motion.a
                href={item.href}
                onClick={onSelect}
                aria-current={active ? "page" : undefined}
                style={{
                    height: length,
                    borderColor: active ? GLOW : "transparent",
                    boxShadow: active ? `0 0 14px 2px ${GLOW}` : "0 0 0 0 transparent",
                }}
                className="absolute bottom-0 left-0 w-15 -translate-x-1/2 cursor-pointer rounded-full border bg-white transition-[box-shadow,border-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                <motion.span
                    style={{ rotate: textRotate, x: "-50%", y: "-50%", width: length - 24 }}
                    className="absolute top-1/2 left-1/2 text-center text-[10px] font-bold leading-none whitespace-nowrap text-black"
                >
                    {item.label}
                </motion.span>
            </motion.a>
        </div>
    );
}

export default function AsteriskNav({ items = defaultNavItems, size = 360, className = "" }: Props) {
    const router = useRouter();
    const reduceMotion = useReducedMotion();
    const rotation = useMotionValue(0);
    const [active, setActive] = useState(0);
    const busy = useRef(false);
    const step = 360 / items.length;

    const select = (index: number) => async (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (busy.current) return;
        const href = items[index].href;

        if (index !== active) {
            busy.current = true;
            setActive(index);

            // Shortest turn that brings arm `index` to the top (-180, 180].
            const current = rotation.get();
            let delta = (-index * step - current) % 360;
            if (delta > 180) delta -= 360;
            if (delta <= -180) delta += 360;

            if (reduceMotion) {
                rotation.set(current + delta);
            } else {
                await animate(rotation, current + delta, {
                    type: "spring",
                    stiffness: 70,
                    damping: 16,
                }).finished;
            }
            busy.current = false;
        }

        router.push(href);
    };

    return (
        <nav aria-label="Main" className={`relative ${className}`} style={{ width: size, height: size }}>
            <motion.div className="absolute inset-0" style={{ rotate: rotation }}>
                {items.map((item, i) => (
                    <Arm
                        key={item.idx}
                        item={item}
                        angle={i * step}
                        length={size * 0.46}
                        rotation={rotation}
                        active={active === i}
                        onSelect={select(i)}
                    />
                ))}
            </motion.div>
        </nav>
    );
}
