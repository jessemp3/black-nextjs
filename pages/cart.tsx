// pages/cart.tsx

import Header from "@/components/Header";
import CartTable from "@/components/cardTable";
import CartTotal from "@/components/cartTotal";
import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";

const Cart: NextPage = () => {
  return (
    <>
      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Carrinho
          </h1>
          <CartTable />
          <CartTotal/>
        </Container>
      </main>

    </>
  )
}

export default Cart