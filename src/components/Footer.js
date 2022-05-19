import {Facebook, Instagram, Twitter, Youtube, Shopee} from "./icons";
import {SHOP_NAME, SHOP_SLOGEN, FB_PAGE_URL, YOUTUBE_URL, TWITTER_URL, INSTAGRAM_URL, SHOPEE_URL, ACCESSTRADE_URL} from "../../lib/constants"

const Footer = () => (
	<div className="footer bg-gray-800 p-6 text-white">
		<div className="container mx-auto">
			<div className="footer-text flex-none md:flex items-center justify-between">
				<p>© {SHOP_NAME} 2022</p>
				<p className="text-gray">Được thiết kế bởi <a href="https://lovanlong.ga/">Lỗ Văn Long</a></p>
				<span className="text-gray">{SHOP_SLOGEN}</span>
			</div>
			<ul className="social-links mt-8 flex align-center">
				<li><a href={FB_PAGE_URL} className="fa fa-facebook" target="_blank"><Facebook/></a></li>
				<li className="ml-2 mt-1"><a href={TWITTER_URL} target="_blank"><Twitter/></a></li>
				<li className="ml-2 mt-1"><a href={YOUTUBE_URL} className="fa fa-youtube" target="_blank"><Youtube/></a></li>
				<li className="ml-2"><a href={INSTAGRAM_URL} className="fa fa-instagram" target="_blank"><Instagram/></a></li>
				<li className="ml-2"><a href={ACCESSTRADE_URL+SHOPEE_URL} className="fa fa-shopee" target="_blank"><Shopee/></a></li>
			</ul>
		</div>
	</div>
);

export default Footer;
