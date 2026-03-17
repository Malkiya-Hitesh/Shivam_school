import { P } from "@/app/ui/P";
import Image from "next/image";





export default function Student({ name, pr, img }) {
  return (
    <div className="grid justify-items-center bg-[var(--bg-light)] p-4 rounded">
      <Image
        src={img}
        width={500}
        height={500}
        alt={name}
        className="aspect-square rounded-[50%] h-[100%]  w-auto object-cover"
      />
      <h4 className="font-semibold text-2xl mt-2">{name}</h4>
      <P className=" text-xl">{pr} PR</P>
    </div>
  )
}