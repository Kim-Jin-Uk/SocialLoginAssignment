import Router from 'next/router'
import { MouseEventHandler, useCallback } from 'react'

import styles from '../../styles/components/MainHeader.module.scss'

const MainHeader = () => {
  const onClickSignUp: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    Router.push('/signup')
  }, [])

  const onClickLogIn: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    Router.push('/login')
  }, [])

  const onClickIcon: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    Router.push('https://github.com/Kim-Jin-Uk/SocialLoginAssignment')
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.icon} onClick={onClickIcon}></div>
        <button
          className={`${styles.public_button} ${styles.signup_button}`}
          onClick={onClickSignUp}
        >
          회원가입
        </button>
        <button className={`${styles.public_button} ${styles.login_button}`} onClick={onClickLogIn}>
          로그인
        </button>
      </div>
    </>
  )
}

export default MainHeader
