import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Lucas. I'm a Front-end Developer looking forward to learn and apply my knowledge on development technologies.</p>
        <p>
        You can contact me on <a href="https://www.linkedin.com/in/lucaspassini/">LinkedIn.</a>
        </p>
      </section>
    </Layout>
  )
}