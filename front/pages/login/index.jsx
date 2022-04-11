import Router from 'next/router'
import { useCallback } from 'react'

import SignWrapper from '../../componenets/SignWrapper'
import styles from '../../styles/Sign.module.scss'

const Login = () => {
  const onClickSignUp = useCallback(() => {
    Router.replace('/signup')
  }, [])

  const onClickKakao = useCallback(() => {
    Router.replace('http://localhost:3065/auth/kakao')
  }, [])

  const onClickNaver = useCallback(() => {
    Router.replace('http://localhost:3065/auth/naver')
  }, [])

  return (
    <>
      <SignWrapper>
        <div className={styles.title}>로그인</div>
        <div className={styles.sub_title}>
          신규 사용자이신가요?&nbsp;
          <div className={styles.signin} onClick={onClickSignUp}>
            <span>계정 만들기</span>
          </div>
        </div>

        <div>
          <div className={`${styles.sns_btn} ${styles.naver_btn}`} onClick={onClickNaver}>
            <div>
              <div className={styles.naver_icon}></div>
              <div>네이버 아이디로 로그인</div>
            </div>
          </div>
          <div className={`${styles.sns_btn} ${styles.kakao_btn}`} onClick={onClickKakao}>
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
