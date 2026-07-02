import Image from "next/image";

export function Hero(){
  return (
    <div className="mb-4">
      
      <Image src="/logo.svg" width={300} height={102} quality={70} placeholder="blur" blurDataURL="/hero-placeholder.png" loading="eager" alt="Freelance web dev..."/> 
    </div>
  )
}