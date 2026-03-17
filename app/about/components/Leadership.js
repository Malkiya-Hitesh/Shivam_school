import Image from "next/image"
import Section from "@/app/ui/Section"
import { H2 } from "@/app/ui/H2"
import { P } from "@/app/ui/P"
import { H3 } from "@/app/ui/H3"
import { Span } from "@/app/ui/Span"

function Leadership() {
  return (
    <Section>

      <H2 className="text-center mb-4">Leadership & Management</H2>

      <P className="text-center max-w-2xl mx-auto mb-16 text-gray-600">
        Our institution is guided by experienced educators and trustees
        who are committed to shaping the future of our students.
      </P>
      <div className=" flex flex-col gap-4">
        <div className="grid grid-cols-2 border-2 ">
          <div>
            <Image
              src={'/image/1.webp'}
              width={550}
              height={550}
              className=" object-cover  "
            />
          </div>
          <div>
            <H3 >
              harsh vandamna sharma
            </H3>

            <Span >
              founder
            </Span>
            <P>
              Our institution is guided by experienced educators and trustees
              who are committed to shaping the future of our students. Our institution is guided by experienced educators and trustees
              who are committed to shaping the future of our students. Our institution is guided by experienced educators and trustees
              who are committed to shaping the future of our students.
            </P>
          </div>
        </div>
        <div className="grid grid-cols-2 border-2 ">
          <div>
            <Image
              src={'/image/1.webp'}
              width={550}
              height={550}
              className=" object-cover  "
              alt="prinsipal"
            />
          </div>
          <div>
            <H3 >
              harsh vandamna sharma
            </H3>

            <Span >
              founder
            </Span>
            <P>
              Our institution is guided by experienced educators and trustees
              who are committed to shaping the future of our students. Our institution is guided by experienced educators and trustees
              who are committed to shaping the future of our students. Our institution is guided by experienced educators and trustees
              who are committed to shaping the future of our students.
            </P>
          </div>
        </div>
        <div className="grid grid-cols-2 border-2 ">
          <div>
            <Image
              src={'/image/1.webp'}
              width={550}
              height={550}
              className=" object-cover  "
              alt="prinsipal"
            />
          </div>
          <div>
            <H3 >
              harsh vandamna sharma
            </H3>

            <Span >
              founder
            </Span>
            <P>
              Our institution is guided by experienced educators and trustees
              who are committed to shaping the future of our students. Our institution is guided by experienced educators and trustees
              who are committed to shaping the future of our students. Our institution is guided by experienced educators and trustees
              who are committed to shaping the future of our students.
            </P>
          </div>
        </div>
       
      </div>

    </Section>
  )
}

export default Leadership