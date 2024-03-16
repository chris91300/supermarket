import BannerTitle from "../_components/global/bannerTitle/BannerTitle";
import TemplateWithMenuAside from "../_components/global/templateWithMenuAside/TemplateWithMenuAside";

type categoryProps = {
    params: {
        category: string
    }
}

export default function Category({ params }: categoryProps) {

  const { category } = params;
  
    return (
      <main className="flex min-h-screen flex-col py-10">        
        <BannerTitle
            title="CATEGORIES"
            img="categories_banner.jpg"
            alt="une image représentant une allée de supermarché avec un caddie au centre"
        />
        
        <TemplateWithMenuAside>
          <p>{ decodeURI(category) }</p>
        </TemplateWithMenuAside>
      </main>
    );
  }