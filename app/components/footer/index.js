/**
 * @author Kevin
 * @description: 底部组件
 * path app/components/footer
 * @Date: 2024/11/12
 */
import {siteConfig} from "@/config/site";
import Link from "next/link";

function Footer(){
	const d = new Date();
	const currentYear = d.getFullYear();
	const { authors } = siteConfig;

	return (
		<footer>
			<div className="mt-16 space-y-2 pt-6 pb-4 flex flex-col items-center bg-gray text-sm text-gray-400 border-t">
				<div className="flex space-x-2">
					<div>{`©${currentYear}`}</div>
					{" "}
					<Link href={authors[0].twitter || authors[0].url} target="_blank">
						{"@" + authors[0].name}
					</Link>{" "}
					<a href="https://link.zhihu.com/?target=https://sprunkimod.app">zhihu</a>
					<div>All rights reserved.</div>
				</div>
				<div className="flex space-x-2">
					<Link href={'/en'} title="English">English</Link>
					<Link href={'/zh'} title="中文">中文</Link>
					<Link href={'/ja'} title="日本語">日本語</Link>
					<Link href={'/fr'} title="Français">Français</Link>
					<Link href={'/es'} title="español">español</Link>
					<Link href={'/pt'} title="Português">Português</Link>
					<Link href={'/ms'} title="Melayu">Melayu</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer;