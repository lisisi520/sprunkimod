/**
 * @Author kevin
 * @Description
 * @path app/components/button
 * @Date 2024/11/20
 */
'use client';

import { Button } from "@/components/ui/button"

function XButton({title}) {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Button id="scrollToTopButton"  onClick={scrollToTop}>
			{title}
		</Button>
	)
}

export default XButton