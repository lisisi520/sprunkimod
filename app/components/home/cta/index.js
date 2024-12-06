/**
 * @Author kevin
 * @Description
 * @path app/components/home/cta
 * @Date 2024/11/19
 */

import {useTranslation} from "@/app/i18n";
import XButton from "@/app/components/button";

async function CTA({lng}){
	const {t} = await useTranslation(lng, 'common');

	return (
		<section className="flex flex-col justify-center max-w-[100%] items-center py-16 gap-12">
			<div className="flex flex-col text-center gap-4">
				<h2 className="text-center font-satoshi text-6xl font-bold">
					{t("Ready to Play Sprunki Game?")}
				</h2>
			</div>
			<XButton title={t("Play Free")} />
		</section>
	)
}

export default CTA