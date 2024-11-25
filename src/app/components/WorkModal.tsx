import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import styles from "../../styles/WorkModal.module.scss";
import { WorkType } from "../types/work";
import serviceColorMap from "../types/colorMap";


export default function Modal(props: {isOpen: boolean, onClose: () => void, content: WorkType }) {
	if (!props.isOpen) return null;

	return (
		<div className={styles.modalOverlay} onClick={props.onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button className={styles.closeButton} onClick={props.onClose}>×</button>
				<div className={styles.leftContainer}>
					<div className={styles.platform}>
						{props.content.platform}
					</div>
					<h3 className={styles.title}>
						{props.content.title}
					</h3>
					<div className={styles.divideLine}/>
					<table>
						<tbody>
							<tr>
								<td className={styles.firstColumn}>Data</td>
								<td className={styles.secondColumn}>2023/05〜現在</td>
							</tr>
							<tr>
								<td className={styles.firstColumn}>Team</td>
								<td className={styles.secondColumn}>1人</td>
							</tr>
							<tr>
								<td className={styles.firstColumn}>Role</td>
								<td className={styles.secondColumn}>ALL</td>
							</tr>
							<tr>
								<td className={styles.firstColumn}>URL</td>
								<td className={styles.secondColumn}>
									<a href="https://www.learn-by-typing.com" target="_blank">
										https://www.learn-by-typing.com
									</a>
								</td>
							</tr>
						</tbody>
					</table>
					<div className={styles.divideLine}/>
					<div className={styles.description}>
						{props.content.description.split("¥n").map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</div>
					<div className={styles.divideLine}/>
					<div className={styles.serviceFrame}>
						{props.content.usedService.map((service, index) => {
							const [backgroundColor, fontColor] = serviceColorMap[service];
							return (
								<div
									key={index}
									className={styles.serviceElement}
									style={{
										backgroundColor: backgroundColor,
										color: fontColor,
									}}
								>
									{service}
								</div>
							)
						})}
					</div>
					{props.content.githubUrl ? (
						<a href={props.content.githubUrl} className={styles.github} target="_blank">
							<FontAwesomeIcon icon={faSquareGithub} />
						</a>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
};