import React from "react";
import Image from "next/image";
import image from "@/images/bola.png";

export default function Home() {
  return (
    <main className="text-9xl flex-col ">
      Mohit
      <Image src={image} alt="Bola" height={400} width={500} />
      <Image
        src="https://images.pexels.com/photos/18623730/pexels-photo-18623730/free-photo-of-facade-of-a-byzantine-temple.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Bola"
        height={300}
        width={400}
      />
    </main>
  );
}
