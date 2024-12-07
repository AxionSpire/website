import Image from "next/image"

export function Header() {
    return (
        <header>
            <Image src="/logo.webp" alt="Logo" width={200} height={200} />
        </header>
    )
}