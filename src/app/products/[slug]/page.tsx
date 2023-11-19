import { notFound } from "next/navigation";
import MeowArticle from "@/components/MeowArticle";
import { getProduct, getProducts } from "@/service/products";

// export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <MeowArticle />
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줍니다.(SSG)
  const proudcts = await getProducts();
  return proudcts.map((product) => ({
    slug: product.id,
  }));
}