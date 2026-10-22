"use client";

import { useState } from "react";
import Image from "next/image";
import { categories, posts, type Category } from "./data";
import { motion, AnimatePresence } from "motion/react";

/**
 * Pill styling. `selected === null` is the home (cloud) state, where featured
 * categories read as selected.
 */
function pillState(category: Category, selected: string | null) {
    const isSelected = selected === category.id || (selected === null && !!category.featured);
    if (category.featured) {
        return isSelected ? "border-[#FF0000] bg-[#FF0000]" : "border-[#FF0000] bg-transparent";
    }
    return isSelected ? "border-white bg-[#575757]" : "border-white bg-transparent";
}

const pillBase =
    "rounded-[24px] border opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-white";

export default function CollegeExplorer() {
    const [selected, setSelected] = useState<string | null>("vss-homage");
    const toggle = (id: string) => id === selected ? setSelected("vss-homage") : setSelected(id);

    return (

        <AnimatePresence mode="wait" initial={false}>
            {
                selected === "vss-homage" ?
                    (
                        <motion.section key="cloud"
                            aria-label="Categories"
                            className="relative flex w-full justify-center px-4 py-20"
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <div className="flex flex-wrap justify-center gap-4 md:relative h-auto md:w-[986.4px]"
                            >
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        type="button"
                                        onClick={() => toggle(category.id)}
                                        aria-pressed={!!category.featured}
                                        className={`${pillBase} ${pillState(category, selected)} px-23 py-5 text-xl tracking-[-0.05em] md:flex md:items-center md:justify-center`}

                                    >
                                        {category.label}
                                    </button>
                                ))}
                            </div>
                        </motion.section>
                    ) :
                    (
                        <motion.div key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: 20 }}       // slides out of view
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >

                            <nav aria-label="Categories" className="relative w-full">
                                <div className="scrollbar-none [&::-webkit-scrollbar]:hidden flex gap-6.5 overflow-x-auto px-4 py-6">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            type="button"
                                            onClick={() => toggle(category.id)}
                                            aria-pressed={selected === category.id}
                                            className={`${pillBase} ${pillState(category, selected)} py-5 shrink-0 px-23 text-xl whitespace-nowrap tracking-[-0.05em]`}
                                        >
                                            {category.label}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-white font-syne-mono text-center">Active category: {selected?.split('-').join(' ').toUpperCase()}</p>
                            </nav>

                            <section aria-label="Posts" className="relative mt-16 w-full px-6 md:mt-[100px] md:px-[268px]">
                                {posts.length === 0 ? (
                                    <p className="text-center text-xl tracking-[-0.05em] opacity-70">Nothing here yet.</p>
                                ) : (
                                    <>
                                        <ul className="grid grid-cols-1 gap-x-[135px] gap-y-[66px] md:grid-cols-2">
                                            {posts.map((post) => (
                                                <li key={post.id} className="flex gap-[25px]">
                                                    <div className="relative size-[102px] shrink-0 overflow-hidden">
                                                        <Image src={post.image} alt="" fill sizes="102px" className="object-cover" />
                                                    </div>
                                                    <div className="flex min-h-[109px] flex-col">
                                                        <h2 className="text-2xl leading-[1.2] tracking-[-0.05em] whitespace-pre-line">{post.title}</h2>
                                                        <ul className="mt-2 flex gap-1">
                                                            {post.tags.map((tag) => (
                                                                <li
                                                                    key={tag}
                                                                    className="rounded-[8px] border border-white px-1 text-[8px] leading-3 tracking-[-0.05em] opacity-70"
                                                                >
                                                                    {tag}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <p className="mt-auto pt-3 text-[8px] tracking-[-0.05em]">{post.date}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </section>
                        </motion.div>
                    )
            }
        </AnimatePresence>
    )
}
