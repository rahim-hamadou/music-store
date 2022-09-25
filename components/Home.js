import styles from "../styles/Home.module.css";
import { FaShoppingBag, FaBars, FaUserAlt, FaMapMarker } from "react-icons/fa";
import { FaKickstarterK } from "react-icons/fa";

import Card from "./Card";

function Home() {
	const productInfos = [
		{
			title: "PHANTOM I White",
			info: "A class of its own.",
			background: "phantom1.png",
		},
		{
			title: "PHANTOM II Gold",
			info: "Pure sound.",
			background: "phantom2.png",
		},
		{
			title: "PHANTOM II Black",
			info: "Deeply nomadic.",
			background: "phantom3.png",
		},
		{
			title: "PHANTOM II White",
			info: "Intensively immersive.",
			background: "phantom4.png",
		},
	];

	const productInfosComplete = productInfos.map((data) => {
		return <Card title={data.title} info={data.info} background={data.background} />;
	});

	return (
		<div>
			<div className={styles.homeTop}>
				<header className={styles.nav}>
					<div className={styles.btn}>
						<span>
							<FaBars />
						</span>
					</div>
					<div className={styles.titleName}>
						<p>MUSIC STORE</p>
					</div>
					<div className={styles.iconPlus}>
						<span>
							<FaUserAlt />
						</span>
						<span>
							<FaMapMarker />
						</span>
						<span>
							<FaShoppingBag />
						</span>
					</div>
				</header>
				<div className={styles.discover}>
					<div className={styles.focus}>
						<span>PHANTOM</span>
						<span>IMPLOSIVE SOUND</span>
					</div>
					<div className={styles.btnChoice}>
						<button className={styles.what}>discover</button>
						<button className={styles.buy}>buy</button>
					</div>
				</div>
			</div>

			<main>
				<div className={styles.mainTop}>
					<div className={styles.mainTopTitle}>
						<span className={styles.titleOne}>LATEST LAUNCH</span>
						<span className={styles.titleTwo}>DIONE SOUNDBAR</span>
					</div>
					<div className={styles.mainTopImg}>
						{" "}
						<img src="soundbar.png" alt="" />
					</div>
					<div className={styles.mainTopLink}>
						<button>DISCOVER</button>
					</div>
				</div>
				<div className={styles.mainContent}>
					{productInfosComplete}
					{/* <div className={styles.card}>{productInfosComplete}</div> */}
				</div>
			</main>
			<footer>
				<div className={styles.footer}>
					<span className={styles.linkFooter}>ABOUT</span>
					<span className={styles.linkFooter}>CONTACT</span>
					<span className={styles.linkFooter}>SUPPORT</span>
					<span className={styles.linkFooter}>STORES</span>
				</div>
			</footer>
		</div>
	);
}

export default Home;
