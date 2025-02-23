"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export function FixedPlugin() {
  return (
    <Link href="https://censonotech.com.ng/our-team/" target="_blank" className="flex items-center">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Censono Tech logo"
          src="/favicon.png"
        />{" "}
        Made by Matur Innocent J
      </Button>
    </Link>
  );
}
