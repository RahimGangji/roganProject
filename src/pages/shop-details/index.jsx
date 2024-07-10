import SEO from "../../components/seo";
import { Wrapper } from "../../layout";
import ShopDetailsMain from '../../components/shop/shop-details';
import { useGetProductQuery } from "../../redux/api/api-slice";

export default function ProductDetails() {
  const { data: products, isLoading, isError } = useGetProductQuery();
  let content = null;
  if (isLoading && !isError) {
    content = <div className="container">
      <h2 className="text-center pt-10 alert alert-info mt-50">Loading...</h2>
    </div>
  }
  if (products?.length > 0 && !isError && !isLoading){
    const product =  products[0]
    content=  <ShopDetailsMain products={products} product={product} />
  }

  return (
    <Wrapper>
      <SEO pageTitle={'Product Details'} />
     {content}
    </Wrapper>
  )
}
