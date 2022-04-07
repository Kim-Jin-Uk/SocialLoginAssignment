import type { NextPage } from 'next'

import MainHeader from '../componenets/MainHeader'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <MainHeader></MainHeader>
      <div className={styles.contents_wrapper}>
        <p>
          <b>Connectly 지원자 김진욱 입니다</b>
        </p>
        <ul>
          <li>
            <b>기술스택</b>
            <br />
            프론트: Next.js, TypeScript
            <br />
            백: Nest.js
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
