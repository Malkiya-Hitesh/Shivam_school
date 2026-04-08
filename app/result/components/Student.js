import Image from "next/image"

export default function Student({ name, pr, img, isTopper = false }) {
  return (
    <div className={`flex flex-col items-center rounded-xl p-4 gap-2 text-center
      `}>

     

      <div className="relative">
        <Image
          src={img}
          width={500}
          height={500}
          alt={name}
          className={`rounded-full object-cover
            ${isTopper ? "w-full h-full aspect-square" : "w-full h-full aspect-square"}`}
        />
      </div>

      <h3 className={`font-semibold ${isTopper ? "text-lg" : "text-sm"}`}>
        {name}
      </h3>

      <p className={`text-[var(--color-text-muted)] ${isTopper ? "text-base" : "text-sm"}`}>
        {pr} PR
      </p>

      {isTopper && (
        <span className="text-xs font-medium bg-purple-200 text-purple-800 px-3 py-1 rounded-full">
          Topper
        </span>
      )}
    </div>
  )
}