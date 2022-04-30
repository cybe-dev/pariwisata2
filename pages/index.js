import Head from "next/head";
import Image from "next/image";
import ContentList from "../components/ContentList";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";
import { getDestination, getWebsiteInfo } from "../service";

export async function getServerSideProps() {
  const website = await getWebsiteInfo();
  const destinations = await getDestination();

  return {
    props: {
      website,
      destinations,
    },
  };
}

export default function App({ destinations, website }) {
  return (
    <div className="w-full overflow-x-hidden">
      <Head>
        <title>{website.name}</title>
      </Head>
      <Header name={website.name} />
      <div className="flex justify-center">
        <MainWrapper className="rounded-none lg:rounded bg-gray-300 relative overflow-hidden flex flex-col justify-center py-40">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <Image src={website.background} layout="fill" objectFit="cover" />
          </div>
          <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full" />
          <div className="relative px-5 flex flex-col items-center">
            <h2 className="text-2xl lg:text-4xl poppins text-white w-full text-center lg:w-3/4">
              {website.jumboTitle}
            </h2>
            <p className="text-gray-100 text-base lg:text-lg mt-5 w-full text-center lg:w-3/4">
              {website.jumboContent}
            </p>
          </div>
        </MainWrapper>
      </div>
      <div className="flex justify-center bg-gray-100 mt-0 lg:mt-16">
        <MainWrapper className="py-16">
          <h3 className="text-xl lg:text-2xl text-gray-800 font-bold poppins">
            Destinasi Favorit
          </h3>
          <div className="h-1 bg-primary w-24 mt-3 mb-16" />
          {destinations.map((item, index) => (
            <ContentList key={`${index}`} {...item} />
          ))}
        </MainWrapper>
      </div>
      <div className="bg-white text-gray-600 flex justify-center">
        <MainWrapper className="py-16 pb-20">
          <h3 className="text-xl lg:text-2xl text-gray-800 font-bold poppins">
            Tentang Kami
          </h3>
          <div className="h-1 bg-primary w-24 mt-3 mb-10" />
          {website.description}
        </MainWrapper>
      </div>
      <div className="bg-primary flex justify-center">
        <MainWrapper className="text-white py-5 text-center lg:text-left">
          &copy;2022 {website.name} - All Rights Reserved
        </MainWrapper>
      </div>
    </div>
  );
}
