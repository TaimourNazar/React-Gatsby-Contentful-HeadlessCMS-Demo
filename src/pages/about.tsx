import { Link } from "gatsby"
import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import styles from './about.module.css'

export default function Home() {
  return (
    <Layout headerTitle="About Page Header">
      <div>
          About!
      </div>
      <div className={styles.myTitle}>
          Second Div
      </div>
    </Layout>
    )
}
