import * as React from "react"

export default function Home() {
  const {GATSBY_A} = process.env
  const rightway = process.env.GATSBY_A
  console.log('>>>key in var',GATSBY_A)
  console.log('>>>key like our project',GATSBY_A)
  console.log('>>>>>simple log',process.env.GATSBY_A)
  return <div>Hello world!</div>
}
