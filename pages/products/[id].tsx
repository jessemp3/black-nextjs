// pages/products/[id].tsx

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Container } from "reactstrap";
import Header from "../../src/components/Header";
import ProductDetails from "@/components/productsDetails";
import { fetchProduct, fetchProducts, ProductType } from "../../src/services/products";
import { getStaticPaths } from "next/dist/build/templates/pages";

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id

  if (typeof id === 'string') {
    const product = await fetchProduct(id)

    return { props: { product }, revalidate: 10  }
  }

  return { redirect: {
     destination: '/products', 
     permanent: false 
    } }
}

export const getStaticpaths: GetStaticPaths = async () => {
    const products = await fetchProducts()

    const paths = products.map(product => {
      return {
        params:{
          id: product.id.toString()
        }
      
      }
    })

    return {paths , fallback: false}
}
const Product: NextPage = (props: {
  children?: ReactNode
  product?: ProductType
}) => {
  return (
    <>
    <Head>
      <title>{props.product!.name}</title>
      <meta name="description" content={props.product!.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Container className="mt-5">
      <ProductDetails product={props.product!} />
    </Container>
  </>
  )
}

export default Product