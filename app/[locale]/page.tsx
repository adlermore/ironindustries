
import MainBanner from "@/components/home/MainBanner";
import Services from "@/components/home/Services";
import { useTranslations } from 'next-intl';
import aboutImage from '@/public/images/aboutImage.png';
import Image from "next/image";
export default function Home() {
  const t = useTranslations('home');

  return (
    <div className="overflow-x-hidden text-white">
      <MainBanner />
      <div className="custom_container h-screen">
        <div className="py-25 flex items-center gap-20">
          <div className="relative w-full h-93.25 border_decor">
            <Image
              src={aboutImage}
              alt="About Our Company"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-full">
            <div className="section_title">ABOUT OUR COMPANY</div>
            <div>
              Based in Armenia, Iron Industries specializes in high-precision laser cutting and sheet metal bending solutions. We combine advanced technology with skilled craftsmanship to deliver both functional and decorative metal products tailored to our clients’ needs.
              <br /><br />
              Our expertise includes decorative laser cutting, custom metal designs, and professional sheet metal bending for a wide range of industries and architectural projects. From complex artistic patterns to durable structural components, we ensure precision, quality, and attention to every detail.
              With a commitment to reliability, innovation, and customer satisfaction, we transform metal into refined, high-quality solutions built to last.
              <br /><br />
              But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </div>
          </div>

        </div>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </div>

      {/* <div className="w-full h-500">
       <Services />
      </div> */}
    </div>
  );
}
