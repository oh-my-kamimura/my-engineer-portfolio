import styles from "../../styles/WorkCard.module.scss"
import Image from "next/image"

export default function WorkCard(props: { imageSrc: string }) {
	return (
		<div className={styles.container}>
			<div className={styles.cardImageFrame}>
				<Image
					className={styles.cardImage}
					src={`/work-card/${props.imageSrc}`}
					alt="トップ画像"
					fill
				/>
			</div>
		</div>
	)
}