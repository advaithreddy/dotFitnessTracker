
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="ftr_cntnt footerleft">
                @2025 dotFitnessTracker. All rights reserved.
                <Link 
                    href=''
                    className="ft_links ft_terms">Terms of Use</Link>
                <Link 
                    href=''
                    className="ft_links ft_privacy">Privacy Policy</Link>
            </div>
            <div className="ftr-cntnt footerright">
                Powered by{" "}
                <Link
                    href=''
                    className="ftrLogo" aria-label="Boinkers Logo">
                        <Image
                            src="dotlogo.svg"
                            alt="Dot Logo"
                            width={20}
                            height={20}
                        />
                    </Link>
            </div>
        </footer>
    )
}


export default Footer;