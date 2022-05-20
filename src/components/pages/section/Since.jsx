import React from "react";
// import { Link } from "react-router-dom";

function Since({ data }) {
	return (
		<>
			<section id="since">
				<div className="contain">
					<div className="flex_row main_row">
						<div className="col col1">
							<div className="content">
								<h3 className="fancy">
									<em>{data.heading}</em> <strong>{data.heading_ex}</strong>
								</h3>
								<p>{data.para}</p>
								{/* <div className="btn_blk">
									<Link to={data.btn_link} className="site_btn shade long round">
										{data.btn}
									</Link>
								</div> */}
							</div>
						</div>
						<div className="col">
							<div className="vid_blk">
								<video controls={true} loop="" playsInline="">
									<source src={data.video} type="video/mp4" />
								</video>
							</div>
						</div>
						<div className="col">
							<figure>
								<img src={data.image[1].src} alt="" />
							</figure>
						</div>
						{/* {data.image.map((val) => {
							return (
								<div className="col" key={val.id}>
									<figure>
										<img src={val.src} alt="" />
									</figure>
								</div>
							);
						})} */}
					</div>
				</div>
			</section>
		</>
	);
}

export default Since;
