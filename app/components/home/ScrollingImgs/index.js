/**
 * @Author kevin
 * @Description
 * @path app/components/home/ScrollingImgs
 * @Date 2024/11/19
 */
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";
import incrediboxMustard from "@/app/statics/images/incredibox-mustard.png"
import sprunkiRetake from "@/app/statics/images/sprunki-retake.png";
import sprunkiSprinkle from "@/app/statics/images/sprunki-sprinkle.jpg";
import sprunkiPhase1 from "@/app/statics/images/sprunki-phase-1.png";
import sprunkiPhase3 from "@/app/statics/images/sprunki-phase-3.png";
import sprunkiPhase4 from "@/app/statics/images/sprunki-phase-4.png";
import sprunkiPhase5 from "@/app/statics/images/sprunki-phase-5.png";
import sprunkiPhase6 from "@/app/statics/images/sprunki-phase-6.png";
import sprunkiPhase7 from "@/app/statics/images/sprunki-phase-7.png";
import sprunkiPhase8 from "@/app/statics/images/sprunki-phase-8.png";
import sprunkiPhase10 from "@/app/statics/images/sprunki-phase-10.png";
import sprunkiDandysWorld from "@/app/statics/images/sprunki-dandys-world.png";
import sprunkiPokemon from "@/app/statics/images/sprunki-pokemon.png";
import superSprunkiBrasil from "@/app/statics/images/super-sprunki-brasil.png";
import incrediboxExpressSimulator from "@/app/statics/images/incredibox-express-simulator.png";
import sprunkiRainbowFriends from "@/app/statics/images/sprunki-rainbow-friends.png";


function ScrollingImgs() {
	return (
		<section className="mx-auto md:max-w-5xl lg:max-w-7xl w-[100%] px-0 md:px-6 lg:px-8 pt-16">
			<Marquee direction="left" autoFill pauseOnHover>
				<div className="mx-6 text-gray-500">
					<Image src={incrediboxMustard} alt={incrediboxMustard} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiRetake} alt={sprunkiRetake} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={incrediboxMustard} alt={sprunkiSprinkle} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiPhase1} alt={sprunkiPhase1} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiPhase3} alt={sprunkiPhase3} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiPhase4} alt={sprunkiPhase4} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiPhase5} alt={sprunkiPhase5} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiPhase6} alt={sprunkiPhase6} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiPhase7} alt={sprunkiPhase7} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiPhase8} alt={sprunkiPhase8} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiPhase10} alt={sprunkiPhase10} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiDandysWorld} alt={sprunkiDandysWorld} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiPokemon} alt={sprunkiPokemon} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={superSprunkiBrasil} alt={superSprunkiBrasil} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={incrediboxExpressSimulator} alt={incrediboxExpressSimulator} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
				<div className="mx-6 text-gray-500">
					<Image src={sprunkiRainbowFriends} alt={sprunkiRainbowFriends} width={50} height={50} style={{objectFit: "fill",}}
					       className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}/>
				</div>
			</Marquee>
		</section>
	)
}

export default ScrollingImgs;