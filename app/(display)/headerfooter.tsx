"use client"
import Image from "next/image"
import { useEffect, useLayoutEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBarsStaggered, faGlobe, faHome, faNewspaper, faToolbox } from "@fortawesome/free-solid-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

type MenuLink = {
    name: string;
    link: string;
    icon: IconProp | null;
    className?: string;
}

export function Header() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const menuLinks: MenuLink[] = [
        { name: 'Home', link: '/', icon: faHome },
        { name: 'News', link: '/news', icon: faNewspaper },
        { name: 'Tools', link: '/tools', icon: faToolbox },
        { name: 'Dynmap', link: 'https://map.axionspire.net', icon: faGlobe}
    ];
    useEffect(() => {
        if (window.screen.width < 768) { setIsMobile(true) } else { setIsMobile(false) }
    }, [])
    return (
        <header className="flex flex-col lg:flex-row justify-center items-center border-2 rounded-3xl border-violet-600/50 bg-slate-500/25 mx-8 mt-8" role="banner" aria-label="Site Header">
            <Link href="/" className="flex items-center space-x-2 lg:pr-8 align-midddle"><Image src="/logo.webp" alt="AxionSpire Logo" width={150} height={150} /></Link>
            <div className="flex space-x-8 text-center justify-center">
                {isMobile && <div>
                    <div className="space-x-2 align-middle flex justify-center text-center">
                        <FontAwesomeIcon icon={faBarsStaggered} className="flex flex-col border-violet-700 bg-gradient-to-br from-purple-700 to-violet-500 rounded-full border-2 py-4 justify-center text-center px-28 mb-3" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />
                    </div>
                    {isMobileMenuOpen && <MobileMenu menuLinks={menuLinks} setMobileMenuOpen={setMobileMenuOpen} />}
                    </div>}
                {isMobile === false && <MenuBar menuLinks={menuLinks}/>}
            </div>
        </header>
    )
}

function MenuBar({ menuLinks }: Readonly<{ menuLinks: MenuLink[] }>) {
    const pathname = usePathname();
    return (
        <div className={`flex space-x-6 items-center text-lg`}>
            {menuLinks.map((linkData, index) => (
                <div key={index} className={linkData.className}>
                    <Link href={linkData.link} className={`hover:text-sky-400 flex space-x-2 place-items-center`}>{linkData.icon !== null && <FontAwesomeIcon icon={linkData.icon} />} <h1 className={`${pathname === linkData.link ? "underline" : ""}`}>{linkData.name}</h1></Link>
                </div>
            ))}
        </div>
    );
}

function MobileMenu({ menuLinks, setMobileMenuOpen }: Readonly<{ menuLinks: MenuLink[], setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }>) {
    const pathname = usePathname();
    const router = useRouter();
    useScrollLock();
    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-600/95 to-indigo-500/95">
            <button className="absolute top-2 right-2 text-gray-400" onClick={() => setMobileMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <Link href="/"><Image src="/logo.webp" alt="AxionSpire Logo" width={200} height={200} className="mb-8" /></Link>
            <div className="space-y-4">
                {menuLinks.map((linkData, index) => (
                    <div key={index} className={`${linkData.className}`}>
                        <button onClick={() => openMobileLink(linkData.link)} className={`hover:text-sky-400 flex space-x-2 place-items-center`}>{linkData.icon !== null && <FontAwesomeIcon icon={linkData.icon} />} <h1 className={`${pathname === linkData.link ? "underline" : ""}`}>{linkData.name}</h1></button>
                    </div>
                ))}
            </div>
        </div>
    );
    function openMobileLink(link: string) {
        setMobileMenuOpen(false);
        router.push(link);
    }
}

function useScrollLock() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
}