import { useRouter } from "next/router";
import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import ShopDetailsMain from '../../components/shop/shop-details';
import { useGetProductQuery } from "../../redux/api/api-slice";

const ProductDynamicDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: products, isLoading, isError } = useGetProductQuery(undefined,{
    refetchOnMountOrArgChange:true,
  });
  let content = null;
  if (isLoading && !isError) {
    content = <div className="container">
      <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
    </div>
  }
  if (products?.length > 0 && !isError && !isLoading){
    const product =  products.find(item => Number(item.id) === Number(id))
    content=  <ShopDetailsMain products={products} product={product} />
  }

  return (
    <Wrapper>
      <SEO pageTitle={'Product Details'} />
      {content}
    </Wrapper>
  );
};

export default ProductDynamicDetails;

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}