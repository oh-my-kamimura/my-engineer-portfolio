import Image from "next/image";
import styles from "../../styles/Top.module.scss"
import ScrollAnimation from './ScrollAnimation';

export default function Top() {
	return (
		<div className={styles.container} id="top">
			<div className={styles.titleContainer}>
				<div className={styles.titleSite}>
					Engineer Portfolio
				</div>
				<h1 className={styles.titleName}>
					YOHEI KAMIMURA
				</h1>
				<div className={styles.scroll}>
					<ScrollAnimation/>
				</div>
				<Image
					className={styles.mainImage}
					src="/top.png"
					alt="プロフィール画像"
					fill
					/>
			</div>
		</div>
	)
}