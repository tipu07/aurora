import React from "react";
// import Cover from "../common/Cover";
import HomeFolio from "./section/HomeFolio";
// import DestinationTabs from "./section/DestinationTabs";
import OverviewDestination from "./section/OverviewDestination";
// import WhatWeDo from "./section/WhatWeDo";
// import Experience from "./section/Experience";
// import EnquireBlk from "./section/EnquireBlk";
// import Itinerary from "./section/Itinerary";
import DestinationFuture from "./section/DestinationFuture";
import Trip from "./section/Trip";

function DestinationDetail() {
	const area_detail = {
		cover: {
			ex_class: "long",
			sec_bg: "/images/elephants-4864736_1920.jpg",
			heading: "Namibia",
		},
		tabs: {
			link_01: "Overview",
			link_hash_01: "overview",
			link_02: "Itinerary",
			link_hash_02: "itinerary",
			link_03: "Accommodation",
			link_hash_03: "accommodation",
			link_04: "Map",
			link_hash_04: "map",
			link_05: "Transport",
			link_hash_05: "transport",
			link_06: "Documents",
			link_hash_06: "documents",
		},
		itinerary: {
			btn_01: "All Itineraries",
			btn_link_01: "/itineraries/itinerary-detail",
			btn_02: "Inspire Me",
			btn_link_02: "/inspiration",
			btn_03: "Customize my Trip",
			btn_link_03: "/itineraries",
			site_btn_img_01: "/images/5d9e42a98c9b8d0cd28453b2_Eningu-Clayhouse-Lodge.jpg",
			site_btn_img_02: "/images/house-home-residence-interior.jpg",
			site_btn_img_03: "/images/amboseli-national-park-2063592_1920.jpg",
			block: [
				{
					id: 1,
					title: "Classic Namibia",
					badge: "Namibia",
					price: "£ 2367",
					duration: "14 Nights",
					src: "/images/antelopes-3816813_1280.jpg",
					link: "/itineraries/itinerary-detail",
				},
				{
					id: 2,
					title: "Luxury Namibia",
					badge: "Namibia",
					price: "£ 7899",
					duration: "18 Nights",
					src: "/images/giraffe-661648_1920.jpg",
					link: "/itineraries/itinerary-detail",
				},
				// {
				// 	id: 3,
				// 	title: "Classic Botswana",
				// 	badge: "Botswana",
				// 	price: "£ 3383",
				// 	duration: "14 Nights",
				// 	src: "/images/house-home-residence-interior.jpg",
				// 	link: "/itineraries/itinerary-detail",
				// },
				// {
				// 	id: 4,
				// 	title: "Dunes & Falls",
				// 	badge: "Tanzania",
				// 	price: "£ 3309",
				// 	duration: "19 Nights",
				// 	src: "/images/amboseli-national-park-2063592_1920.jpg",
				// 	link: "/destinations/destination-detail",
				// },
			],
		},
		overview: {
			heading_01: "Overview",
			heading_02: "Country Intro",
			btn_link_01: "/itineraries",
			btn_01: "View Itineraries",
			btn_link_02: "/enquire",
			btn_02: "Enquire Now",
			map_img: "/images/NamibiaDelivery.jpg",
			main_img: "/images/Detailed_Destination_130322-10.jpg",
		},
		what: {
			sec_bg: "/images/pattern.jpg",
			heading: "What to See",
			block_01: {
				img_src: "/images/house_06.jpg",
				title: "Okavango Delta",
				para: "The Okavango Delta is the worlds largest inland delta system. Either way you look at it, be it by car, boat or plane, it is simply incredible!",
			},
			block_02: {
				img_src: "/images/meerkat-729400_1920.jpg",
				title: "Chobe National Park",
				para: "Our favourite Botswana National Park, Chobe offers everything from ants to elephants! The game viewing is superb, all year round too.",
			},
			block_03: {
				img_src: "/images/antelope-4683340_1920.jpg",
				title: "Central Kalahari Game Reserve",
				para: "Renowned for its panoramic views and growing lion population, the Kalahari is a very desirable place to travel. It's also best travelled between December - May.",
			},
			block_04: {
				img_src: "/images/house-home-residence-interior.jpg",
				title: "The Makgadikgadi",
				para: "Situated over the lowest lying areas of Botswana, the Makgadikgadi is home to two magnificent salt pans. The view from here takes your breath away.",
			},
			block_05: {
				img_src: "/images/cheetah-737417_1920.jpg",
				title: "Moremi Game Reserve",
				para: "Located on the periphery of the Okavango delta, the Moremi is home to a huge array of wildlife. A few nights here and you will feel like you were in the Delta itself.",
			},
			block_06: {
				img_src: "/images/amboseli-national-park-2063592_1920.jpg",
				title: "Savuti",
				para: "The Savuti Channel has a fascinating history of flooding and drying up sporadically - a mystery that has intrigued geologists for years. It is also a wildlife hotspot!",
			},
		},
		experience: {
			heading: "Experience",
			block_01: {
				img_src: "/images/5d7764053db27fbda4406b50_Quad-Biking-Botswana.jpg",
				title: "Quad Biking in the Makgadikgadi",
				link: "?",
			},
			block_02: {
				img_src: "/images/5d77629d9e55cbf0ccf98909_Safari-Drive-Botswana-Mokoro.jpg",
				title: "Mokoro Trips",
				link: "?",
			},
			block_03: {
				img_src: "/images/5d776508491d4e59d5e139af_Helicopter-Flight-Botswana.jpg",
				title: "Okavango Delta Helicopter Flight",
				link: "?",
			},
			block_04: {
				img_src: "/images/5d7765e8a2a386c83fbc0c6f_Horse-Riding-Botswana.jpg",
				title: "Riding Safari",
				link: "?",
			},
		},
		enquire: {
			title: "Enquire about Botswana",
			para: "Quos suscipit deleniti, est praesentium culpa repudiandae non obcaecati ex sunt ipsum necessitatibus optio placeat a incidunt velit nihil sint autem officiis!",
			btn: "Enquire Now",
			btn_link: "/enquire",
		},
		trip: {
			heading: "Top Itineraries",
			owl_trip: [
				{
					src: "/images/5dc9b04a673bd963aafaa38d_safari-drive-meregan-butteflies.jpg",
				},
				{
					src: "/images/5dc2a049acd63f66ce0803e6_safari-drive-vehicle-camping.jpg",
				},
				{
					src: "/images/giraffe-661648_1920.jpg",
				},
				{
					src: "/images/book_04.jpg",
				},
			],
		},
		home_folio: {
			img_01: "/images/elephants-4864736_1920.jpg",
		},
	};
	return (
		<>
			{/* <Cover data={area_detail.cover} /> */}
			<HomeFolio data={area_detail.home_folio} />
			<OverviewDestination data={area_detail.overview} />
			<DestinationFuture />
			<Trip data={area_detail.trip} itinerary={area_detail.itinerary} />
		</>
	);
}

export default DestinationDetail;
