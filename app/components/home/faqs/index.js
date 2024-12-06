/**
 * @author Kevin
 * @description:  问答
 * path app/components/home/faqs
 * @Date: 2024/11/12
 */
"use server"
import {RoughNotation} from "react-rough-notation";
import {FAQS_LIST} from "@/config/faqs";
import {useTranslation} from "@/app/i18n";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

async function FAQS({id, lng}){
	const {t} = await useTranslation(lng, 'common');

	const items = FAQS_LIST.map((o, idx)=>{
		o.key = idx + "";
		o.label = o[`title_${lng}`]
		o.children = <p>{o[`content_${lng}`]}</p>
		o.style = {marginBottom: 24}
		return o;
	})


	return (
		<section
			id={id}
			className="flex flex-col justify-center max-w-[100%] mx-auto items-center py-16 gap-12"
		>
			<div className="flex flex-col text-center gap-4">
				<h2 className="text-center text-white text-6xl">
					<RoughNotation type="highlight" show={true} color="#f59129">
						{t("FAQS")}
					</RoughNotation>
				</h2>
			</div>
			<Accordion type="single" collapsible className="w-full">
				{
					items?.map((item, idx)=>{
						return (
							<AccordionItem value={idx +1} key={idx}>
								<AccordionTrigger>{item?.label}</AccordionTrigger>
								<AccordionContent>
									{item?.children}
								</AccordionContent>
							</AccordionItem>
						)
					})
				}
			</Accordion>
		</section>
	)
}

export default FAQS;