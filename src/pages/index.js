import * as React from "react"

export default function Home() {
  const {GATSBY_A} = process.env
  console.log('>>>logg',GATSBY_A)
  console.log('>>>>>',process.env.GATSBY_A)
  return <div>Hello world!</div>
}
