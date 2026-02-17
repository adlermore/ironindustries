
import MainBanner from "@/components/home/MainBanner";
import Services from "@/components/home/Services";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="overflow-x-hidden text-white">
      <MainBanner />
      <div className="custom_container pt-100 h-screen">
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </div>
      {/* <div className="w-full h-500">
       <Services />
      </div> */}
    </div>
  );
}
