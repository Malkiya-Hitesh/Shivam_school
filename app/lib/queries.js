import { sanityFetch } from "./sanityFetch"

 const teachersQuery = `*[_type == "teacher"] | order(_createdAt asc){
  _id, name, subject,
  "img": image.asset->url
}`






 const galleryQuery = `*[_type == "galleryImage"] | order(_createdAt asc){
  _id, title,
  "img": image.asset->url
}`





  

 const achievementsQuery = `*[_type == "achievement"] | order(_createdAt asc){
  _id, title, desc,
  "img": image.asset->url
}`






const facilitiesQuery = `*[_type == "facility"] | order(_createdAt asc){
  _id, title, desc,
  "img": image.asset->url
}`











const resultsQuery = `*[_type == "result"] | order(year desc, class asc) {
    _id,
    year,
    class,
    totalStudents,
    passStudents,
    passRate,
    distinction,
    firstClass,
    "posterUrl": poster.asset->url,
    "posterAlt": poster.alt,
    "pdfUrl": pdf.asset->url,
  }`




export const getTeacher = () => sanityFetch(teachersQuery)
export const getGallery = () => sanityFetch(galleryQuery)
export const getAchievements = () => sanityFetch(achievementsQuery)
export const getFacilities = () => sanityFetch(facilitiesQuery)

export const getResults = () => sanityFetch(resultsQuery)