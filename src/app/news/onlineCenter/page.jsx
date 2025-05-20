import styles from "../news.module.css"

export default function OnlineCenter() {
  return (
    <div className={styles.newsArea}>
      <div className={styles.newsTitle}>
        <img src="/images/news/onlineqna_title_01.png" alt="온라인 고객센터" />
      </div>
      <div className={styles.onlineCenterTxt}>
        서비스 및 고객 불편 사항 등을 남겨주시면 <br />
        영업일 10일 이내로 답변드리도록 하겠습니다.
      </div>
      <div>
        <div className={styles.customerInputArea}>
          <div className={styles.inputItem}>
            <div className={styles.label}>고객명</div>
            <div className={styles.inputArea}>
              <input type="text" id="customername" name="customername" maxlength="20" className={styles.input} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}