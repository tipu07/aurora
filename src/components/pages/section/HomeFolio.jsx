import React from "react";
import OwlCarousel from "react-owl-carousel";

function HomeFolio({ data }) {
	return (
		<>
			<section id="home_folio">
				<OwlCarousel id="owl-home_folio" className="owl-carousel owl-theme" items={1} loop margin={0} nav={true} dots={false}>
					<div className="item" style={{ backgroundImage: "url(" + data.img_01 + ")" }}>
						<a href="?">Nambia</a>
					</div>
					<div className="item" style={{ backgroundImage: "url(" + data.img_01 + ")" }}>
						<a href="?">Botswana</a>
					</div>
					<div className="item" style={{ backgroundImage: "url(" + data.img_01 + ")" }}>
						<a href="?">Tanzania</a>
					</div>
				</OwlCarousel>
			</section>
		</>
	);
}

export default HomeFolio;
