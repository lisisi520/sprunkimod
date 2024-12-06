/**
 * @author Kevin
 * @description:  首页组件 - 生物群系
 * path app/components/home/biomes
 * @Date: 2024/11/12
 */
import {RoughNotation} from "react-rough-notation";
import {BIOMES_MAP} from "@/config/biomes";
import {createElement} from "react";
import {useTranslation} from "@/app/i18n";

async function Features({id, lng}) {
	const {t} = await useTranslation(lng, 'common');

	return (
		<section
			id={id}
			className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 mt-16"
		>
			<h2 className="text-center text-white text-6xl">
				<RoughNotation type="highlight" show={true} color="#f59129">
					{t("Features")}
				</RoughNotation>
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{BIOMES_MAP?.map((feature, index) => (
					<div
						key={index}
						className={`
              flex flex-col items-center text-center px-8 py-6 border-b
              ${index === 0 ? "md:border-r" : ""}
              ${index === 1 ? "lg:border-r" : ""}
              ${index === 2 ? "md:border-r lg:border-r-0" : ""}
              ${index === 3 ? "lg:border-b-0 lg:border-r" : ""}
              ${index === 4 ? "md:border-b-0 md:border-r" : ""}
              ${index === 5 ? "border-b-0 border-r-0" : ""}
            `}
					>
						<div className="p-4 w-16 h-16 dark:text-white rounded-full flex items-center justify-center">
							{feature.icon && typeof feature.icon === "string" ? (
								<span className="text-2xl">{feature.icon}</span>
							) : (
								createElement(feature.icon, {className: "text-2xl"})
							)}
						</div>
						<h2 className={"text-xl font-semibold mb-2"}>{feature[`title_${lng}`]}</h2>
						<p className="text-slate-700 dark:text-slate-400">
							{feature[`content_${lng}`]}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Features;