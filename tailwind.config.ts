import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                violet: "rgb(160,85,247)",
            },
            backgroundImage: {
                "categories-title":
                    "url('./public/img/banner/categories_bande3.jpg')",

                "fruits-and-vegetables-title":
                    "url('/img/banner/fruit_and_vegetable_title.jpg')",
                "fruits-and-vegetables":
                    "url('/img/banner/fruit_and_vegetable.jpg')",

                "bread-and-pastry-title":
                    "url('/img/banner/bread_and_pastry_title.jpg')",
                "bread-and-pastry": "url('/img/banner/bread_and_pastry.jpg')",

                "meat-and-fish-title":
                    "url('/img/banner/meat_and_fish_title.jpg')",
                "meat-and-fish": "url('/img/banner/meat_and_fish.jpg')",

                "frais-title": "url('/img/banner/frais.jpg')",
                frais: "url('/img/banner/frais.jpg')",
            },
            keyframes: {
                cartMove: {
                    "100%": { left: "75%" },
                },
                cloudAndTreeMove: {
                    "0%": { left: "100%" },
                    "100%": { left: "-10%" },
                },
                firstTownMove: {
                    "0%": { left: "60%" },
                    "100%": { left: "10%" },
                },
                secondTownMove: {
                    "0%": { left: "80%" },
                    "100%": { left: "30%" },
                },
            },
            animation: {
                cartIsMoving: "cartMove 45s 0s linear infinite",
                cloudIsMoving: "cloudAndTreeMove 45s 0s linear infinite",
                firstTreeIsMoving: "cloudAndTreeMove 5s 0s linear infinite",
                secondTreeIsMoving: "cloudAndTreeMove 5s 2s linear infinite",
                firstTownIsMoving: "firstTownMove 360s 0s linear infinite",
                secondTownIsMoving: "secondTownMove 360s 0s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
