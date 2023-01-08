import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import store from "../components/app/store"
import { Provider } from "react-redux"
import { Counter } from '../components/feature/counter/Counter'

export default function Home() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
