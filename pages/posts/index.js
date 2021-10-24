import Alert from '../../components/alert';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'

export default function posts({ allPostsData }) {
  return (
    <div>
      <h2>THIS IS POSTS PAGE~!</h2>
      <img src="/images/profile.jpg" alt="sodacrew" style={{
         width: '400px'
       }} />
      <Alert type="fail">
        <div>ALERT!!!</div>
      </Alert>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  // getServerSideProps 와는 달리 반드시 pages 에서만 사용가능
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}