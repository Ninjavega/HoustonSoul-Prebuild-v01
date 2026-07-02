
import { Hero } from "./components/hero";
import { Featured } from "./components/featured";
import Image from "next/image";
import { Blog } from "./components/blog";

import Newsletter from "./components/newsletter";
 
export default function Home() {
  return (

    <section>
      <Hero />
        <div className="divider"></div>
      <Featured />
      <div className="divider"></div>
      
      <Newsletter />
      <div className="divider"></div>

      <Blog />



    </section>
   
  );
}
