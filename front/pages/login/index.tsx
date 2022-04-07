import Link from 'next/link'
import Router from 'next/router'

import SignWrapper from '../../componenets/SignWrapper'
import styles from '../../styles/Sign.module.scss'

const Login = () => {
  return (
    <>
      <SignWrapper>
        <div className={styles.title}>로그인</div>
        <div className={styles.sub_title}>
          신규 사용자이신가요?&nbsp;
          <Link href="/signup">
            <a className={styles.signin}>
              <span>계정 만들기</span>
            </a>
          </Link>
        </div>

        <div>
          <div className={`${styles.sns_btn} ${styles.naver_btn}`}>
            <div>
              <div className={styles.naver_icon}></div>
              <div>네이버 아이디로 로그인</div>
            </div>
          </div>
          <div className={`${styles.sns_btn} ${styles.kakao_btn}`}>
            <div>
              <div className={styles.kakao_icon}></div>
              <div>카카오 계정으로 로그인</div>
            </div>
          </div>
        </div>
      </SignWrapper>
    </>
  )
}

export default Login
