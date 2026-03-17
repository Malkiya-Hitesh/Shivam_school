import Student from "./Student";





export default function ResultBlock({ title, topper, students }) {
    return (
        <div className="flex flex-col gap-8">

            <div className="flex justify-center gap-20 text-lg font-semibold  bg-[var(--primary)] text-white py-2 rounded">
                <span className="   text-2xl ">{title}</span>
                <span className=" text-2xl">100% Result</span>
                <span className=" text-2xl"> download complete result</span>
            </div>

            <div className="grid grid-cols-[0.5fr_1fr] border-2 gap-6">

                <div className="flex justify-center items-center ">

                    <Student {...topper} />
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {students.map((s, i) => (
                        <Student key={i} {...s} />
                    ))}
                </div>

            </div>

        </div>
    )
}