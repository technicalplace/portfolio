import styles from './index.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.aboutPage}>
      <div className={styles.hero}>
        <p className={styles.kicker}>About Me</p>
        <h1>こんにちは、藤縄 駿佑です</h1>
      </div>

      <div className={styles.content}>
        <p>
          1997年生まれ、新潟県出身。2020年に新潟大学経済学部を卒業後、第四北越銀行に入行し、預金・為替業務や窓口対応を担当。正確性とホスピタリティを重視した顧客対応を通じて、社会人としての基礎力を培いました。<br /><br />
          その後IT業界へ転職しフロントエンドエンジニアとして、複数のプロジェクトに携わり設計から実装、運用保守など対応しました。技術力はもちろん、多様な関係者と円滑にコミュニケーションを取りながらプロジェクトを推進する力を身につけました。（<a href="https://docs.google.com/spreadsheets/d/1tuN_xRYs2BgH3zux7AC-aowcwe6rh2wVfIKsaVFn1Zc/edit?usp=sharing" target="_blank" className={styles.skillSheet}>スキルシート</a>）<br />
        </p>
        <p>
          常にユーザーの視点に立ち、誰のために、何のために作るのかを意識しています。<br /><br />
        </p>
      </div>

      <div className={styles.profileGrid}>
        <div className={styles.profileCard}>
          <span className={styles.label}>Name</span>
          <strong>Shunsuke Fujinawa</strong>
        </div>
        <div className={styles.profileCard}>
          <span className={styles.label}>Role</span>
          <strong>Frontend Engineer</strong>
        </div>
        <div className={styles.profileCard}>
          <span className={styles.label}>Focus</span>
          <strong>UI / UX / Web development</strong>
        </div>
        <div className={styles.profileCard}>
          <span className={styles.label}>Interests</span>
          <strong>HTML, CSS, JavaScript, React</strong>
        </div>
      </div>
    </section>
  )
}