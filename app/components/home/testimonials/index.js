/**
 * @Author kevin
 * @Description 评价
 * @path app/components/home/testimonials
 * @Date 2024/11/19
 */
import { RoughNotation } from "react-rough-notation";
import Image from "next/image";
import Link from "next/link";
import {TestimonialsData} from "@/config/testimonials";
import user1 from "@/app/statics/images/users/1.png"
import user2 from "@/app/statics/images/users/2.png"
import user3 from "@/app/statics/images/users/3.png"
import user4 from "@/app/statics/images/users/4.png"
import user5 from "@/app/statics/images/users/5.png"
import user6 from "@/app/statics/images/users/6.png"
import {useTranslation} from "@/app/i18n";

async function Testimonials({id, lng}) {
	const {t} = await useTranslation(lng, 'common');

	return (
		<section
			id={id}
			className="flex flex-col justify-center items-center pt-16 gap-12 max-w-[100%]"
		>
			<div className="flex flex-col text-center max-w-xl gap-4">
				<h2 className="text-center text-white text-6xl">
					<RoughNotation type="highlight" show={true} color="#f59129">
						{t("Testimonials")}
					</RoughNotation>
				</h2>
				<p className="text-large text-default-500">
					{"If you use this landing page template and recommend it on your Twitter"}{" "}
					{"I will display your tweet and recommendation here."}
				</p>
			</div>
			<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-3 gap-3 overflow-hidden relative transition-all">
				{TestimonialsData.map((testimonial, index) => (
					<div className="mb-4 z-0 break-inside-avoid-column" key={index}>
						<div className="border border-slate/10 rounded-lg p-4 flex flex-col items-start gap-3 h-fit">
							<div className="flex items-start justify-between w-full">
								<div className="flex items-start gap-2">
									<Image
										src={index === 0 ? user1 : index === 1 ? user2 : index === 2 ? user3: index === 3 ? user4 : index === 4 ? user5 : user6}
										alt="maker"
										height={40}
										width={40}
										className="w-12 h-12 rounded-full object-cover object-top"
									/>
									<div className="flex flex-col items-start">
										<p className="font-bold">{testimonial.user.name}</p>
										<p className="dark:text-zinc-400">
											@{testimonial.user.username}
										</p>
									</div>
								</div>
							</div>
							<p className="dark:text-zinc-200 text-[14px]">
								{testimonial[`content_${lng}`]}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
)
}

export default Testimonials;
	