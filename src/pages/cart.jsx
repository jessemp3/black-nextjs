// pages/cart.tsx

import { NextPage } from "next";
import Head from "next/head";

const Cart: Nextpage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Carrinho
      </h1>
    </>
  )
}

export default Cart