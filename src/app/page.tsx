import BannerTitle from "./_components/global/bannerTitle/BannerTitle";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-10">
      <BannerTitle
          title="CATEGORIES"
          img="categories_banner.jpg"
          alt="une image représentant une allée de supermarché avec un caddie au centre"
      />
    </main>
  );
}
