import Link from "next/link";
import { siteConfig } from "@/config/site";
import {createElement} from "react";

/**
 * @author Kevin
 * @description: 顶部右侧链接
 * path app/components/head-links
 * @Date: 2024/11/11
 */
function HeadLinks(){
	const links = siteConfig.headerLinks;

	return (
		<div className="flex flex-row items-center gap-6">
			{links.map((link, index) => (
				<Link
					key={link.name}
					aria-label={link.name}
					href={link.href}
					target="_blank"
					rel="noopener norefferer nofollow"
					className={` flex max-w-[24px] flex-col items-center justify-center`}
				>
					{link.icon &&
						createElement(link.icon, { className: "text-lg" })}
				</Link>
			))}
		</div>
	);
}

export default HeadLinks;