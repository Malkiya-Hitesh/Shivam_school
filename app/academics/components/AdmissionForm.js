
import React from 'react'

function AdmissionForm() {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('✅ Admission Form Submitted Successfully!')
        e.target.reset()
    }
    return (
        <div className=" flex flex-col items-center  bg-gradient-to-br from-blue-200 to-white font-sans min-[1048px]:py-19 py-13 max-[640px]:py-8 min-[1048px]:px-13 px-7 max-[640px]:px-3 ">

            <div>
                <H1 data="Admission Form" />
            </div>
            <div className="w-full  bg-white p-3 sm:p-5 md:p-8 lg:p-10 xl:p-10  rounded-lg shadow-md ">

                <form onSubmit={handleSubmit}>
                    <FormInput label="Full Name" type='text' name="fullName" required={true} />
                    <FormInput label="Email Address" type="email" name="email" required={true} />

                    <FormInput label="Mobile Number" type="tel" name="mobileNumber" required={true} />


                    <FormInput label="Date of Birth" type="date" name="dob" required={true} />

                    <FormSelect
                        label="Gender"
                        name="gender"
                        options={["Male", "Female", "Other"]}
                    />
                    <FormSelect
                        label="Program Applying For"
                        name="program"
                        options={["Preschool", "Primary School", "Middle School", "High School"]}
                    />


                    <FormInput label="Parent/Guardian Name" name="guardianName" type='text' required={true} />

                    <FormInput label="Parent/Guardian Number" type="tel" name="guardianNumber" required={true} />

                    <FormInput label={'Previous School'} name="previousSchool" type='text' required={false} />
                    <FormInput label="Address" name="address" type='text' required={true} />

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 mt-6"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>

    )
}

export default AdmissionForm


const FormInput = ({ label, type = 'text', name, required = false }) => {
    return (

        <>
            <label htmlFor={name} className="block  mb-1.5 mt-4  text-sm font-bold text-blue-900">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={`Enter your ${label.toLowerCase()}`}
                required={required}
                className="w-full p-3 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </>
    )
}
const FormSelect = ({ label, name, options = [] }) => {
    return (
        <>
            <label htmlFor={name} className="block  mb-1.5 mt-4  text-sm font-bold text-blue-900">
                {label}
            </label>
            <select
                id={name}
                name={name}
                required={true}
                className="w-full  p-3  rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                <option value="">Select</option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </>
    )
}