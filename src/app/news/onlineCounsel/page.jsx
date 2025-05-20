import styles from "../news.module.css";

export default function OnlineCounsel() {


  return (
    <div className={styles.maintell}>
      <div className={styles.title}>
        <img src="/images/news/onlineqna_title_02.png" alt="상담사진" />
      </div>

      <div className={styles.text}>
        항상 설빙에 많은 관심을 가져주셔서 감사합니다.
        <br />
        상담 요청 주신 내용 답변 확인을 위해
        <br />
        아래 정보를 입력해 주시기 바랍니다.
      </div>

      <div className={styles.box}>
        <form className={styles.form}>
          <div className={styles.row}>
            <label className={styles.label1}>성명</label>
            <input type="text" maxLength="20" className={styles.inputSingle} />
          </div>

          <div className={styles.row}>
            <label className={styles.label1}>연락처</label>
            <div className={styles.inputPhoneGroup}>
              <input type="text" maxLength="3" className={styles.inputPhone} />
              <input type="text" maxLength="4" className={styles.inputPhone} />
              <input type="text" maxLength="4" className={styles.inputPhone} />
            </div>
            <button type="submit" className={styles.confirmBtn}>확인</button>
          </div>

          <div className={styles.row}>
            <label className={styles.label1}>비밀번호</label>
            <input type="password" maxLength="20" className={styles.inputSingle} />
          </div>
        </form>
      </div>
    </div>
  );
}