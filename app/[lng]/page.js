import FAQS from "@/app/components/home/faqs";
import GameList from "@/app/components/home/game-list";
import ScrollingImgs from "@/app/components/home/ScrollingImgs";
import Features from "@/app/components/home/features";
import Testimonials from "@/app/components/home/testimonials";
import CTA from "@/app/components/home/cta";
import {useTranslation} from "@/app/i18n";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export default async function Home({params}) {
	const {lng} = await params;
	const {t} = await useTranslation(lng, 'common');

	return (
		<div className="home py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			{/*渐变色标题*/}
			<svg aria-hidden="true"
			     className="pointer-events-none absolute inset-0 w-full fill-gray-400/30 [mask-image:radial-gradient(800px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[100%] skew-y-12 stroke-gray-400/20">
				<defs>
					<pattern id=":Rhjtt7mkva:" width="50" height="50" patternUnits="userSpaceOnUse" x="-1" y="-1">
						<path d="M.5 50V.5H50" fill="none" stroke-dasharray="0"></path>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#:Rhjtt7mkva:)"></rect>
				<svg x="-1" y="-1" className="overflow-visible">
					<rect width="49" height="49" x="601" y="151" fill="currentColor" stroke-width="0"
					      opacity="0.049849840106617194"></rect>
					<rect width="49" height="49" x="251" y="501" fill="currentColor" stroke-width="0"
					      opacity="0.049936297135718635"></rect>
					<rect width="49" height="49" x="51" y="751" fill="currentColor" stroke-width="0"
					      opacity="0.04921964427776402"></rect>
					<rect width="49" height="49" x="451" y="401" fill="currentColor" stroke-width="0"
					      opacity="0.047938868701749016"></rect>
					<rect width="49" height="49" x="101" y="451" fill="currentColor" stroke-width="0"
					      opacity="0.04610780557413818"></rect>
					<rect width="49" height="49" x="601" y="751" fill="currentColor" stroke-width="0"
					      opacity="0.04380630813102471"></rect>
					<rect width="49" height="49" x="351" y="451" fill="currentColor" stroke-width="0"
					      opacity="0.040930887231661474"></rect>
					<rect width="49" height="49" x="901" y="551" fill="currentColor" stroke-width="0" opacity="0"></rect>
					<rect width="49" height="49" x="651" y="401" fill="currentColor" stroke-width="0"
					      opacity="0.034505027237173636"></rect>
					<rect width="49" height="49" x="51" y="801" fill="currentColor" stroke-width="0"
					      opacity="0.03082955339777982"></rect>
					<rect width="49" height="49" x="51" y="501" fill="currentColor" stroke-width="0"
					      opacity="0.026811332169745586"></rect>
					<rect width="49" height="49" x="501" y="501" fill="currentColor" stroke-width="0"
					      opacity="0.02242229211406084"></rect>
					<rect width="49" height="49" x="301" y="401" fill="currentColor" stroke-width="0"
					      opacity="0.01806881595257437"></rect>
					<rect width="49" height="49" x="351" y="251" fill="currentColor" stroke-width="0"
					      opacity="0.013514245430997107"></rect>
					<rect width="49" height="49" x="151" y="1" fill="currentColor" stroke-width="0"
					      opacity="0.008467670694517438"></rect>
					<rect width="49" height="49" x="501" y="201" fill="currentColor" stroke-width="0"
					      opacity="0.0032517271509277636"></rect>
					<rect width="49" height="49" x="751" y="151" fill="currentColor" stroke-width="0" opacity="0"></rect>
					<rect width="49" height="49" x="551" y="701" fill="currentColor" stroke-width="0" opacity="0"></rect>
					<rect width="49" height="49" x="451" y="251" fill="currentColor" stroke-width="0" opacity="0"></rect>
					<rect width="49" height="49" x="951" y="1" fill="currentColor" stroke-width="0" opacity="0"></rect>
				</svg>
			</svg>

			<section id="hero" className="py-12 relative mb-8" style={{background: "linear-gradient(#e6646512, #9198e517)"}}>
				<h1
					className="text-center text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
					{t("Welcome to Sprunki Mod")}
				</h1>
				<p className="text-center mt-4 text-lg leading-8 text-gray-600 dark:text-gray-100">
					{t("Where wild rhythms collide with musical chaos. Craft, play, and share your sprunki tunes!")}
				</p>
			</section>
			<Card>
				<CardHeader></CardHeader>
				<CardContent>
					<iframe src={`/games/sprunki-incredibox.html`} frameBorder="0" className="w-[100%] h-[70vh]"/>
				</CardContent>
			</Card>
			{/*游戏列表*/}
			<GameList/>
			{/*图片滚动*/}
			<ScrollingImgs/>
			{/*Features*/}
			<Features id="Features" lng={lng}/>
			{/*用户评价*/}
			<Testimonials id="Testimonials" lng={lng}/>
			{/*开始游戏*/}
			<CTA lng={lng}/>
			{/*问题/回答*/}
			<FAQS id="FAQS" lng={lng}/>
		</div>
	);
}
