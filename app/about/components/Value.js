import { H2 } from "@/app/ui/H2";
import { P } from "@/app/ui/P";
import Section from "@/app/ui/Section";


export default function Value() {
  return (
    <Section>

<H2 className="text-center mb-16">Our Values</H2>

<div className="relative ">

  {/* vertical line */}
  <div className="absolute left-2 top-0 h-full w-[2px] bg-gray-300"></div>

  <div className="space-y-16">

    {/* Item 1 */}
    <div className="  flex gap-6 items-start">
      <div className="w-4 h-4 z-[1] bg-pink-500 rounded-full mt-2"></div>

      <div>
        <H2 className="text-xl font-semibold">Vision</H2>
        <P className="text-gray-600 ">
          Our vision is to create a nurturing learning environment where
          students develop knowledge, creativity, and strong values that
          prepare them for lifelong success.
        </P>
      </div>
    </div>

    {/* Item 2 */}
    <div className="flex gap-6 items-start">
      <div className="w-4 h-4 z-[1] bg-pink-500 rounded-full mt-2"></div>

      <div>
        <H2 className="text-xl font-semibold">Mission</H2>
        <P className="text-gray-600 ">
          Our mission is to provide quality education through dedicated
          teachers and modern learning methods that help students grow
          academically and personally.
        </P>
      </div>
    </div>

    {/* Item 3 */}
    <div className="flex gap-6 items-start">
      <div className="w-4 h-4 z-[1] bg-pink-500 rounded-full mt-2"></div>

      <div>
        <H2 className="text-xl font-semibold">Origin</H2>
        <P className="text-gray-600">
          Our school was founded with the aim of nurturing young minds
          and creating a strong foundation for knowledge, discipline,
          and character development.
        </P>
      </div>
    </div>

  </div>

</div>

</Section>
  )
}