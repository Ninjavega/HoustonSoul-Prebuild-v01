import Image from "next/image";

export function Hero(){
  return (
    <div className="mb-4">
      <h1 className="font-bold text-2xl mb-2">Hero Section</h1>
      <Image src="/logo.svg" width={700} height={102} quality={70} placeholder="blur" blurDataURL="/hero-placeholder.png" loading="eager" alt="Freelance web dev..."/> 
    </div>
  )
}