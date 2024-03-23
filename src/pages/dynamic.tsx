// pages/dynamic.tsx

import { GetServerSideProps, NextPage } from "next"
import { ReactNode, useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"

interface ApiResponse {
  name: string
  timestamp: Date
}

export const getServerSideProps: GetServerSideProps = async () => {
  const serverSideData:ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())

  return {
    props: {
      serverSideData
    }
  }
}


const Dynamic: NextPage = (props: {
    children?: ReactNode
    serverSideData?: ApiResponse
}) => {
  const [clientSideDate , setClientSideDate] = useState<ApiResponse>()

  useEffect(() => {
    fetchData()
  } , [])  

  const fetchData = async () => {
    const date = await fetch("api/hello").then(res => res.json())
    setClientSideDate(date)
  }

  return (
    <Container tag="main">
      <h1 className="my-5">
        Como funcionam as renderizações do Next.js
      </h1>

      <Row>
        <Col>
          <h3>
            Gerado no servidor:
          </h3>
          <h2>
            {props.serverSideData?.timestamp.toString()}
          </h2>
        </Col>

        <Col>
          <h3>
            Gerado no cliente:
          </h3>
          <h2>{clientSideDate?.timestamp.toString()}</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Dynamic