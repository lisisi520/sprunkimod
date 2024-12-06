/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: `
              default-src 'self';
              frame-src 'self'  https://pokerogue-seven.vercel.app/ https://vercel.live https://scratch.mit.edu/ https://kdata1.com https://iframegame.com;
              style-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://vercel.live https://vercel.live/fonts;
              font-src 'self' https://cdnjs.cloudflare.com;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://www.googletagmanager.com;
              connect-src 'self' https://vercel.live wss://ws-us3.pusher.com https://sockjs-us3.pusher.com https://www.google-analytics.com https://region1.google-analytics.com;
              
              img-src 'self' data:;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
            `.replace(/\s{2,}/g, ' ').trim(), // 去掉多余的空白和换行符
					},
					{
						key: 'X-Robots-Tag',
						value: 'index, follow', // 控制非 HTML 内容的索引
					},
				],
			},
		];
	},
};

export default nextConfig;
