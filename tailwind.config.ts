import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
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
        },
    },
    plugins: [],
};
export default config;
