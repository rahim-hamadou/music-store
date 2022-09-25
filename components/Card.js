import styles from "../styles/Card.module.css";

function Card(props) {
	return (
		<div className={styles.cardType}>
			<div className={styles.cardText}>
				<div className={styles.textInfo}>
					<span>{props.title}</span>
					<span>{props.info}</span>
				</div>
				<button>DISCOVER</button>
			</div>
		</div>
	);
}

export default Card;
