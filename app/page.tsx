import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <Image src="/logo.webp" alt="Logo" width={200} height={200} />
      <div className="flex flex-col items-center gap-12">

      </div>
    </div>
  );
}
