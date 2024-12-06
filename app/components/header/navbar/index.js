/**
 * @author Kevin
 * @description: 顶部导航栏
 * path app/components/navbar
 * @Date: 2024/11/11
 */
import Image from "next/image";
import Link from "next/link";
import {siteConfig} from "@/config/site";
import logo from "@/app/[lng]/favicon.ico"
import HeadLinks from "@/app/components/header/head-links";
import LanguageSwitcher from "@/app/components/header/lang-switcher";
import {useTranslation} from "@/app/i18n";

const links = [
	{ label: "Features", href: "#Features" },
	{ label: "FAQS", href: "#FAQS" },
	{ label: "Sprunki Phase", href: "sprunki-sprinkle" },
	{ label: "New Sprunki Mod", href: "sprunki-pokemon" },
];

async function Navbar({lng}) {
	const {t} = await useTranslation(lng, 'common');


	return (
		<header className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
			<nav className="relative z-50 flex justify-between items-center">
				{/* Left section */}
				<div className="flex items-center md:gap-x-12 flex-1">
					<Link
						href="/"
						aria-label="sprunki mod"
						title="sprunki mod"
						className="flex items-center space-x-1 font-bold"
					>
						<Image
							alt="Logo"
							src={logo}
							className="w-8 h-8 mr-4"
							width={32}
							height={32}
						/>
						<span className="text-gray-950 dark:text-gray-300 hidden md:block font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
              {siteConfig.name}
            </span>
					</Link>
				</div>
				{/* Center section - Navigation */}
				<ul className="hidden md:flex items-center justify-center gap-6 lg:flex lg:gap-x-12 lg:flex-2">
					{links.map((link) => (
						<li key={link.label}>
							<Link
								href={`/${link.href}`}
								aria-label={link.label}
								title={link.label}
								className="tracking-wide transition-colors text-gray-500 duration-200 font-normal bg-transparent hover:bg-gray-100 hover:text-black py-2 px-4 rounded"
							>
								{t(link.label)}
							</Link>
						</li>
					))}
				</ul>
				{/* Right section */}
				<div className="hidden md:flex items-center justify-end gap-x-6 flex-1">
					<HeadLinks />
					<LanguageSwitcher />
				</div>
			</nav>
		</header>
)
}

export default Navbar;