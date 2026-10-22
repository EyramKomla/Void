import type { StaticImageData } from "next/image";
import cry from "@/assets/images/experimental-college/cry.png";
import hair from "@/assets/images/experimental-college/hair.png";
import vssCover from "@/assets/images/experimental-college/vss-cover.png";
import beforeAfter from "@/assets/images/experimental-college/before-after.png";
import vssLogo from "@/assets/images/experimental-college/vss-logo.png";
import cosmos from "@/assets/images/experimental-college/cosmos.png";

export type Category = {
    id: string;
    label: string;
    /** Highlighted in red (filled when selected / on the cloud, outlined otherwise). */
    featured?: boolean;
    /** Cloud placement and size in px, relative to the 986.4 x 424.8 cloud (md+). */
    cloud: { x: number; y: number; w: number; h: number };
};

export const categories: Category[] = [
    { id: "architecture", label: "ARCHITECTURE", cloud: { x: 368.4, y: 90, w: 319.2, h: 68.4 } },
    { id: "film-&-photography", label: "FILM & PHOTOGRAPHY", cloud: { x: 477.6, y: 177.6, w: 475.6, h: 69.6 } },
    { id: "fashion", label: "FASHION", cloud: { x: 210, y: 172.8, w: 245.1, h: 68.4 } },
    { id: "creative-business", label: "CREATIVE BUSINESS", cloud: { x: 175.2, y: 0, w: 433.2, h: 68.4 } },
    { id: "music", label: "MUSIC", cloud: { x: 724.8, y: 270, w: 165.3, h: 68.4 } },
    { id: "print", label: "PRINT", cloud: { x: 625.2, y: 7.2, w: 168.2, h: 69.6 } },
    { id: "production", label: "PRODUCTION", cloud: { x: 705.6, y: 96, w: 279.3, h: 68.4 } },
    { id: "technology", label: "TECHNOLOGY", cloud: { x: 393.6, y: 261.6, w: 301.6, h: 69.6 } },
    { id: "art", label: "ART", cloud: { x: 62.4, y: 174, w: 133.4, h: 69.6 } },
    { id: "culture", label: "CULTURE", cloud: { x: 145.2, y: 261.6, w: 226.2, h: 69.6 } },
    { id: "vss-homage", label: "VSS: Homage*", featured: true, cloud: { x: 210, y: 356.4, w: 252, h: 68.4 } },
    { id: "graphic-design", label: "GRAPHIC DESIGN", cloud: { x: 0, y: 90, w: 349.2, h: 68.4 } },
    { id: "product-design", label: "PRODUCT DESIGN", cloud: { x: 484.8, y: 352.8, w: 361.2, h: 68.4 } },
];

export type Post = {
    id: string;
    title: string;
    date: string;
    image: StaticImageData;
    tags: string[];
    /** Category ids this post is listed under. */
    categories: string[];
};

export const posts: Post[] = [
    {
        id: "breakroom",
        title: "Intro to Void’s Virtual\nBreakRoom",
        date: "10/OCTOBER/2026",
        image: cry,
        tags: ["COMMUNITY", "VIRTUAL"],
        categories: ["culture", "technology", "production"],
    },
    {
        id: "vss-homage",
        title: "VSS: Homage",
        date: "10/JULY/2026",
        image: vssCover,
        tags: ["COMMUNITY", "VIRTUAL"],
        categories: ["vss-homage", "music", "graphic-design"],
    },
    {
        id: "hair-identity",
        title: "Hair and Identity",
        date: "10/JULY/2026",
        image: hair,
        tags: ["COMMUNITY", "VIRTUAL"],
        categories: ["vss-homage", "fashion", "culture"],
    },
    {
        id: "before-after",
        title: "Before and After Void:\nA Real life Story",
        date: "21/JULY/2026",
        image: beforeAfter,
        tags: ["COMMUNITY", "SPOTLIGHT"],
        categories: ["culture", "film-photography", "creative-business"],
    },
    {
        id: "intro-vss",
        title: "Intro to Void Sound\nSystem (VSS)",
        date: "21/JULY/2026",
        image: vssLogo,
        tags: ["COMMUNITY", "PLAYLIST", "VSS"],
        categories: ["vss-homage", "music", "production"],
    },
    {
        id: "seek-asylum",
        title: "Seek Asylum: Join the\nVoid Community",
        date: "21/JULY/2026",
        image: cosmos,
        tags: ["COMMUNITY", "PLAYLIST", "VSS"],
        categories: ["culture", "art", "creative-business", "vss-homage"],
    },
];
