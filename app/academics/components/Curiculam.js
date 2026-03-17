import Button from '@/app/ui/Button'
import { H2 } from '@/app/ui/H2'
import { P } from '@/app/ui/P'
import Section from '@/app/ui/Section'
import Image from 'next/image'
import React from 'react'

function Curiculam() {
    return (
        <Section className=' flex flex-col gap-8  bg-[var(--bg-light)] ' >
            <H2 className='text-center'>

                Curiculam
            </H2>
            <P className='text-center mt-4'>
                We offer a comprehensive curriculum that covers a wide range of subjects, including mathematics, language arts, science, literature, history, and the arts. Our curriculum is designed to foster critical thinking, creativity, and a love for learning in our students.
            </P>

            <div className='flex flex-col gap-18'>
                <div className='grid grid-cols-[0.8fr_1fr] bg-[var(--bg)]  rounded-2xl gap-12 p-8'>
                    <div className='w-full h-full  rounded-2xl flex items-center justify-center'>
                        <Image src="/image/1.webp" alt='curiculam' width={500} height={500} className='w-full h-auto  rounded-2xl ' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <H2> primory </H2>
                        <div className='flex flex-row gap-2 mt-4'>
                            <Button className='' variant='outline'> std : 1 to 5 </Button>
                            <Button className='' variant='outline'> std : 6 to 10 </Button>


                        </div>
                        <P>
                            Our primary curriculum focuses on building a strong foundation in core subjects such as mathematics, language arts, science, and social studies. We also incorporate art, music, and physical education to promote creativity and physical well-being.
                        </P>
                        <div>
                            <Button className='mt-4' variant={'primary'}>dowlod fees stucser</Button>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-[1fr_0.8fr] bg-[var(--bg)] rounded-2xl gap-12 p-8'>

                    <div className='flex flex-col gap-5'>
                        <H2> secondary </H2>
                        <div className='flex flex-row gap-2 mt-4'>
                            <Button className='' variant='outline'> std : 6 to 9 </Button>
                            <Button className='' variant='outline'> aeg : 10 to 14  </Button>


                        </div>
                        <P>
                            Our secondary curriculum builds on the foundation established in primary school, offering more advanced courses in a variety of subjects. Students are encouraged to explore their interests and develop critical thinking skills through inquiry-based learning and collaborative projects.
                        </P>
                        <div>
                            <Button className='mt-4' variant={'primary'}>dowlod fees stucser</Button>
                        
                        </div>
                    </div>
                    <div className='w-full h-full  rounded-2xl flex items-center justify-center'>
                        <Image src="/image/1.webp" alt='curiculam' width={500} height={500} className='w-full h-auto rounded-2xl ' />
                    </div>
                </div>
                <div className='grid grid-cols-[0.8fr_1fr] bg-[var(--bg)] rounded-2xl gap-12 p-8'>
                    <div className='w-full h-full  flex items-center justify-center'>
                        <Image src="/image/1.webp" alt='curiculam' width={500} height={500} className='w-full h-auto  rounded-2xl ' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <H2> higher secondary </H2>
                        <div className='flex flex-row gap-2 mt-4'>
                            <Button className='' variant='outline'> std : 10 to 12 </Button>
                            <Button className='' variant='outline'> aeg: 14 to 17 </Button>


                        </div>
                        <P>
                            Our primary curriculum focuses on building a strong foundation in core subjects such as mathematics, language arts, science, and social studies. We also incorporate art, music, and physical education to promote creativity and physical well-being.
                        </P>
                        <div>
                            <Button className='mt-4' variant={'primary'}>dowlod fees stucser</Button>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    )
}

export default Curiculam
