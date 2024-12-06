/**
 * @Author kevin
 * @Description 游戏列表
 * @path app/components/home/game-list
 * @Date 2024/11/17
 */

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


function GameList() {
	const data = new Array(20).fill(2)

	return (
		<div className="flex flex-wrap gap-6 justify-center lg:max-w-7xl md:max-w-5xl w-[100%] mx-auto pt-16">
			<Link href="/incredibox-mustard" className="flex flex-col items-center  w-32" title="incredibox-mustard">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={incrediboxMustard} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Incredibox Mustard</span>
			</Link>
			<Link href="/sprunki-retake" className="flex flex-col items-center  w-32" title="sprunki-retake">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiRetake} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Retake</span>
			</Link>
			<Link href="/sprunki-sprinkle" className="flex flex-col items-center  w-32" title="sprunki-sprinkle">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiSprinkle} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Sprinkle</span>
			</Link>
			<Link href="/sprunki-phase-1" className="flex flex-col items-center  w-32" title="sprunki-phase-1">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiPhase1} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Phase 1</span>
			</Link>
			<Link href="/sprunki-phase-3" className="flex flex-col items-center  w-32" title="sprunki-phase-3">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiPhase3} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Phase 3</span>
			</Link>
			<Link href="/sprunki-phase-4" className="flex flex-col items-center  w-32" title="sprunki-phase-4">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiPhase4} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Phase 4</span>
			</Link>
			<Link href="/sprunki-phase-5" className="flex flex-col items-center  w-32" title="sprunki-phase-5">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiPhase5} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Phase 5</span>
			</Link>
			<Link href="/sprunki-phase-6" className="flex flex-col items-center  w-32" title="sprunki-phase-6">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiPhase6} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Phase 6</span>
			</Link>
			<Link href="/sprunki-phase-7" className="flex flex-col items-center  w-32" title="sprunki-phase-7">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiPhase7} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Phase 7</span>
			</Link>
			<Link href="/sprunki-phase-8" className="flex flex-col items-center  w-32" title="sprunki-phase-8">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiPhase8} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Phase 8</span>
			</Link>
			<Link href="/sprunki-phase-10" className="flex flex-col items-center  w-32" title="sprunki-phase-10">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiPhase10} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Phase 10</span>
			</Link>
			<Link href="/sprunki-dandys-world" className="flex flex-col items-center  w-32" title="sprunki-dandys-world">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiDandysWorld} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Dandys World</span>
			</Link>
			<Link href="/sprunki-pokemon" className="flex flex-col items-center  w-32" title="sprunki-pokemon">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiPokemon} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Pokemon</span>
			</Link>
			<Link href="/super-sprunki-brasil" className="flex flex-col items-center  w-32" title="super-sprunki-brasil">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={superSprunkiBrasil} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Sprunki Brasil</span>
			</Link>
			<Link href="/incredibox-express-simulator" className="flex flex-col items-center  w-32" title="incredibox-express-simulator">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={incrediboxExpressSimulator} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Express Simulator</span>
			</Link>

			<Link href="/sprunki-rainbow-friends" className="flex flex-col items-center  w-32" title="sprunki-rainbow-friends">
				<div className="w-32 h-32 relative mb-2">
					<Image alt="sprunkimod" src={sprunkiRainbowFriends} className="w-32 h-32 rounded" width={128} height={128}/>
				</div>
				<span className="text-center">Sprunki Rainbow Friends</span>
			</Link>
		</div>
	)
}

export default GameList;
	