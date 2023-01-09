import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Counter } from '../components/feature/counter/Counter'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>
        <Counter />
      </div>
      <div>
        <Link href="/anotherpage">go to <code>/anotherpage</code></Link>
      </div>
      <div>
        <Link href="/customhook">go to <code>/customhook</code></Link>
      </div>
    </>
  )
}
