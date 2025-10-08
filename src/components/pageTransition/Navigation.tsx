"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Navigation =() => {
   
   return (
    <nav className="w-screen h-[10vh] px-[5vw] flex justify-between items-center">
      <button className="text-2xl">
        <Link href="/pageTransition">Motion</Link>
      </button>
      <ul className="flex justify-center items-center gap-x-8">
        <li>
          <button>
            <Link href="/pageTransition/one">One</Link>
          </button>
        </li>
        <li>
          <button>
            <Link href="/pageTransition/two">Two</Link>
          </button>
        </li>
        <li>
          <button>
            <Link href="/pageTransition/three">Three</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
