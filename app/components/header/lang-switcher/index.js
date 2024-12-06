/**
 * @author Kevin
 * @description: i18n国际化切换按钮
 * path app/components/lang-switcher
 * @Date: 2024/11/11
 */

"use client";

import {useParams, usePathname, useRouter} from 'next/navigation';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const localeNames = [
	{en: "🇺🇸 English", label: "🇺🇸 English", value: 'en',},
	{zh: "zh 中文", label: "zh 中文", value: 'zh',},
	{ja: "ja 日本語", label: "ja 日本語", value: 'ja',},
	{fr: "fr Français", label: "fr Français", value: 'fr',},
	{es: "es español", label: "es español", value: 'es',},
	{pt: "pt português", label: "pt português", value: 'pt',},
	{ms: "ms Melayu", label: "ms Melayu", value: 'ms',},
]

function LanguageSwitcher() {
	const params = useParams();
	const router = useRouter();
	const pathname = usePathname()
	const lng = params.lng;

	/**
	 * 切换语言选择
	 * @param value
	 */
	const handleLngChange = value =>{
		const lng = params.lng;
		let result = pathname.replace(lng, value);
		router.push(result)
	}

	return (
		<Select defaultValue={lng} onValueChange={handleLngChange}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{
						localeNames?.map(o => {
							return (
								<SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
							)
						})
					}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default LanguageSwitcher;