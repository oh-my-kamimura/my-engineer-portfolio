import React from "react";
import styles from "../../styles/WorkModal.module.scss";
import { WorkType } from "../types/work";

export default function Modal(props: {isOpen: boolean, onClose: () => void, content: WorkType }) {
	if (!props.isOpen) return null;

	return (
		<div className={styles.modalOverlay} onClick={props.onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button className={styles.closeButton} onClick={props.onClose}>閉じる</button>
				<div className={styles.leftContainer}>
					{props.content.id}
				</div>
			</div>
		</div>
	);
};