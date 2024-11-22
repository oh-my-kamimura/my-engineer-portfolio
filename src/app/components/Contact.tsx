import styles from "../../styles/Contact.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact () {
	return(
		<div className={styles.container} id="contact">
			<h3>
				Contact
			</h3>
			<div className={styles.message}>
				最後までご覧いただきありがとうございました。<br />
				もしご興味をお持ちいただけましたら、お気軽にご連絡ください。<br />
				新しいご縁を心よりお待ちしております。
			</div>
			<a href="mailto:yohei.kamimura.7y@gmail.com" className={styles.mailLink}>
				<FontAwesomeIcon icon={faEnvelope} style={{marginRight: 6}}/>
				Email
			</a>
		</div>
	)
}