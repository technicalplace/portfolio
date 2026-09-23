import styles from './index.module.css';

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className={styles.contactPage}>
      <div className={styles.heading}>
        <p className={styles.kicker}>Get in touch</p>
        <h2>お問い合わせ</h2>
        <p className={styles.intro}>
          お仕事のご相談やご質問など、お気軽にお問い合わせください。
        </p>
      </div>

      <div className={styles.contactLayout}>
        <div className={styles.contactMessage}>
          <span className={styles.messageIcon}>✦</span>
          <h3>一緒に、良いものを。</h3>
          <p>
            Webサイト制作やフロントエンド開発について、まずはお話を聞かせてください。
            内容を確認のうえ、通常2〜3営業日以内にご連絡します。
          </p>
          <div className={styles.contactDetails}>
            <span>Available for new projects</span>
            <span>Niigata / Japan</span>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <label>
              お名前 <span>*</span>
              <input type="text" name="name" placeholder="山田 太郎" required />
            </label>
            <label>
              メールアドレス <span>*</span>
              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                required
              />
            </label>
          </div>
          <label>
            ご用件
            <select name="subject" defaultValue="">
              <option value="" disabled>
                ご用件を選択してください
              </option>
              <option value="website">Webサイト制作について</option>
              <option value="frontend">フロントエンド開発について</option>
              <option value="other">その他</option>
            </select>
          </label>
          <label>
            メッセージ <span>*</span>
            <textarea
              name="message"
              rows="6"
              placeholder="お問い合わせ内容をご入力ください"
              required
            />
          </label>
          <button type="submit" className={styles.submitButton}>
            メッセージを送る <span>↗</span>
          </button>
          <p className={styles.formNote}>※現在はフォームの見た目のみです。</p>
        </form>
      </div>
    </section>
  );
};