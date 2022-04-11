import SignWrapper from '../../componenets/SignWrapper'
import styles from '../../styles/Sign.module.scss'

const Fail = () => {
  return (
    <>
      <SignWrapper>
        <div className={styles.title}>가입 오류</div>
        <div className={styles.sub_title}>
          예기치 않은 오류 또는 필수제공항목(이메일)에 동의 해주시지 않아 정상적으로 처리되지 않았습니다.
        </div>
      </SignWrapper>
    </>
  )
}

export default Fail
