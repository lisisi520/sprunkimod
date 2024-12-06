/**
 * @Author kevin
 * @Description
 * @path app/[lng]/sprunki-phase-3
 * @Date 2024/11/18
 */
import GameList from "@/app/components/home/game-list";
import Features from "@/app/components/home/features";
import FAQS from "@/app/components/home/faqs";
import Testimonials from "@/app/components/home/testimonials";
import CTA from "@/app/components/home/cta";

async function Page({params}){
	const {lng} = await params;

	return (
		<div className="home py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<iframe src={`/games/sprunki-phase-3.html`} frameBorder="0" className="w-[1220px] h-[70vh]"/>
			{/*游戏列表*/}
			<GameList/>
			{/*Features*/}
			<Features id="Features" lng={lng}/>
			{/*用户评价*/}
			<Testimonials id="Testimonials" lng={lng}/>
			{/*开始游戏*/}
			<CTA lng={lng}/>
			{/*问题/回答*/}
			<FAQS id="FAQS" lng={lng}/>
		</div>
	)
}

export default Page