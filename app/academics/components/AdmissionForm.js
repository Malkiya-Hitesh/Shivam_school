
'use client'

import { H2 } from '@/app/ui/H2'
import Section from '@/app/ui/Section'
import React from 'react'

function AdmissionForm() {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('✅ Admission Form Submitted Successfully!')
        e.target.reset()
    }
    return (
        <Section className=" flex flex-col items-center  ">

            
                <H2>Admission Form</H2>
           
            <div className=" ">

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
        </Section>

    )
}

export default AdmissionForm


const FormInput = ({ label, type = 'text', name, required = false }) => {
    return (

        <>
            <label htmlFor={name} className="block  mb-1.5 mt-4 text-sm font-bold text-blue-900">
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














// 'use client'
// import React, { useState } from 'react';

// export default function () {
 

  
//   // const handleChange = (e) => {
//   //   setForm({ ...form, [e.target.name]: e.target.value });
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   for (let key in form) {
//   //     if (!form[key]) {
//   //       alert('❌ Please fill all fields');
//   //       return;
//   //     }
//   //   }

//   //   alert('✅ Admission Form Submitted Successfully!');
//   //   setForm(initialForm);
//   // };

//   return (
//     <div
//   style={{
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'flex-start', // align items at top
//     background: 'linear-gradient(135deg, #e0f2fe, #ffffff)',
//     fontFamily: 'Arial, sans-serif',
//     padding: '120px 20px 40px 20px', 
//   }}
// >
//   <div
//     style={{
//       width: '100%',
//       maxWidth: '780px',
//       backgroundColor: '#ffffff',
//       padding: '40px',
//       borderRadius: '20px',
//       boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
//       border: '1px solid #e0e7ff',
//     }}
//   >
//     {/* Heading */}
//     <h1
//       style={{
//         textAlign: 'center',
//         color: '#1e3a8a',
//         marginBottom: '8px',
//         fontSize: '36px',
//         fontWeight: 'bold',
//         letterSpacing: '1.5px',
//       }}
//     >
//       ADMISSION FORM
//     </h1>
//     <p
//       style={{
//         textAlign: 'center',
//         color: '#475569',
//         marginBottom: '30px',
//         fontSize: '15px',
//       }}
//     >
//       Please fill all required details carefully
//     </p>


//         <form onSubmit={handleSubmit}>
//           {/* Student Name */}
//           <label htmlFor="name" style={labelStyle}>Student Name</label>
//           <input
//             id="name"
//             style={inputStyle}
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Full Name"
//           />

//           {/* Email */}
//           <label htmlFor="email" style={labelStyle}>Email</label>
//           <input
//             id="email"
//             style={inputStyle}
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="example@gmail.com"
//           />

//           {/* Mobile */}
//           <label htmlFor="phone" style={labelStyle}>Mobile Number</label>
//           <input
//             id="phone"
//             style={inputStyle}
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             placeholder="9876543210"
//           />

//           {/* DOB */}
//           <label htmlFor="dob" style={labelStyle}>Date of Birth</label>
//           <input
//             id="dob"
//             style={inputStyle}
//             type="date"
//             name="dob"
//             value={form.dob}
//             onChange={handleChange}
//           />

//           {/* Gender */}
//           <label htmlFor="gender" style={labelStyle}>Gender</label>
//           <select
//             id="gender"
//             style={inputStyle}
//             name="gender"
//             value={form.gender}
//             onChange={handleChange}
//           >
//             <option value="">Select</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>

//           {/* Apply For Class */}
//           <label htmlFor="applyClass" style={labelStyle}>Apply For Class</label>
//           <select
//             id="applyClass"
//             style={inputStyle}
//             name="applyClass"
//             value={form.applyClass}
//             onChange={handleChange}
//           >
//             <option value="">Select Class</option>
//             {[...Array(12)].map((_, i) => (
//               <option key={i} value={`Std ${i + 1}`}>Std {i + 1}</option>
//             ))}
//           </select>

//           {/* Parent Name */}
//           <label htmlFor="parentName" style={labelStyle}>Parent / Guardian Name</label>
//           <input
//             id="parentName"
//             style={inputStyle}
//             name="parentName"
//             value={form.parentName}
//             onChange={handleChange}
//             placeholder="Parent Name"
//           />

//           {/* Parent Phone */}
//           <label htmlFor="parentPhone" style={labelStyle}>Parent Mobile</label>
//           <input
//             id="parentPhone"
//             style={inputStyle}
//             name="parentPhone"
//             value={form.parentPhone}
//             onChange={handleChange}
//             placeholder="9876543210"
//           />

//           {/* Previous School */}
//           <label htmlFor="previousSchool" style={labelStyle}>Previous School</label>
//           <input
//             id="previousSchool"
//             style={inputStyle}
//             name="previousSchool"
//             value={form.previousSchool}
//             onChange={handleChange}
//             placeholder="School Name"
//           />

//           {/* Address */}
//           <label htmlFor="address" style={labelStyle}>Address</label>
//           <textarea
//             id="address"
//             style={{ ...inputStyle, height: '100px' }}
//             name="address"
//             value={form.address}
//             onChange={handleChange}
//             placeholder="Full Address"
//           />
// {/* Submit */}
// <button
//   type="submit"
//   style={{
//     width: '100%',
//     padding: '14px',
//     marginTop: '20px',
//     borderRadius: '12px',
//     border: '1px solid #1e3a8a', // thin border dark blue
//     backgroundColor: '#1e3a8a',  // full dark blue
//     color: '#ffffff',            // white text
//     fontSize: '16px',
//     fontWeight: 'bold',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//   }}
//   onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//   onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
// >
//   Submit Admission
// </button>


//         </form>
//       </div>
//     </div>
//   );
// }

// const labelStyle = {
//   display: 'block',
//   marginBottom: '6px',
//   marginTop: '16px',
//   fontSize: '14px',
//   fontWeight: 'bold',
//   color: '#1e3a8a',
// };

// const inputStyle = {
//   width: '100%',
//   padding: '13px',
//   borderRadius: '10px',
//   border: '1px solid #c7d2fe',
//   fontSize: '14px',
//   outline: 'none',
//   transition: 'all 0.2s',
// };

