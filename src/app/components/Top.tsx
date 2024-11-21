import Image from "next/image";
import styles from "../../styles/Top.module.scss"
import ScrollAnimation from './ScrollAnimation';

export default function Top() {
	return (
		<div className={styles.container} id="top">
			<div className={styles.titleName}>
				YOHEI KAMIMURA
			</div>
			<div className={styles.titleSite}>
				&lt;engineer portfolio&gt;
			</div>
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
	)
}