import Head from "next/head";
import Seo from "@/components/Seo";

const potato = () => {
  return (
    <div>
      <Head>
        <title>이곳은 타이틀입니다</title>
        <meta name="description" content="검색 되는 데이터" />
      </Head>
      <Seo title="About" />
    </div>
  );
};

export default potato;
