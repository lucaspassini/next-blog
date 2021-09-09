import Link from "next/link";
import Date from "../components/date";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          💻 Hi, I’m <strong>Lucas</strong>, a Front-end Developer, enthusiast
          in learning and applying my knowledge on development technologies.
        </p>
        <p>
          📫 You can contact me on: <br />
          <a href="https://github.com/lucaspassini">GitHub</a>
          <br />
          <a href="https://www.linkedin.com/in/lucaspassini/">LinkedIn</a>
          <br />
          <a href="mailto: lucas.passini1@gmail.com">Gmail</a>
          <br />
          <a href="https://twitter.com/lucaspassini_">Twitter</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📕 Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
