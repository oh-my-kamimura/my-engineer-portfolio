import styles from "../../styles/AboutSite.module.scss"

export default function AboutSite () {
	return (
		<div className={styles.container}>
			<div className={styles.sectionTitle}>
				About this site
			</div>
			<div className={styles.message}>
				この度は貴重なお時間を割いて当サイトをご覧いただき、誠にありがとうございます。<br />
				本サイトでは、私のこれまでの制作物や培ってきたスキルをまとめております。<br />
				ぜひお気軽にご覧いただければ幸いです。
			</div>
		</div>
	)
}