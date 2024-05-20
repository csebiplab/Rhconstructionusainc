// // "use client";

// // import {
// //   getYears,
// //   projectPeriods,
// //   projectTypes,
// //   serviceWithCompanyName,
// //   servicesDropDown,
// // } from "@/constants/projectDetails.dropdownValue";
// // import "./ProjectDetailsForm.css";
// // import { HRSvg } from "./HRSvg";
// // import { useState } from "react";
// // import { toast } from "react-toastify";

// // const ProjectDetailsForm = () => {
// //   const [projectCat, setProjectCat] = useState("");
// //   const [projectCatHeading, setProjectCatHeading] = useState("");
// //   const [projectType, setProjectType] = useState("");
// //   const [projectName, setProjectName] = useState("");
// //   const [thumbPic, setThumbPic] = useState(null);
// //   // const [showThumb, setShowThumb] = useState("");
// //   const [projectPics, setProjectPics] = useState({});
// //   const [showProjectPics, setShowProjectPics] = useState([]);
// //   const [clientName, setClientName] = useState("");
// //   const [city, setCity] = useState("");
// //   const [budget, setBudget] = useState("");
// //   const [completedYear, setCompletedYear] = useState("");
// //   const [projectPeriod, setProjectPeriod] = useState("");
// //   const [projectPictures, setProjectPictures] = useState([]);

// //   const years = getYears();

// //   const projectData = {
// //     projectCat,
// //     projectCatHeading,
// //     projectType,
// //     projectName,
// //     thumbPic,
// //     clientName,
// //     city,
// //     budget,
// //     completedYear,
// //     projectPictures,
// //   };

// //   const uploadThumbImage = async (e) => {
// //     const file = e.target.files[0];
// //     const formData = new FormData();
// //     formData.append("image", file);

// //     const res = await fetch("/api/upload-img", {
// //       method: "POST",
// //       body: formData,
// //     });

// //     // console.log(res);

// //     const data = await res.json();
// //     setThumbPic(data);
// //     // console.log(data);
// //   };

// //   const uploadProjectImageHandler = async (e) => {
// //     if (!projectPeriod) {
// //       // alert("Please first choose project period!!!");
// //       toast.warn("Please first choose project period!!!");
// //       return;
// //     }
// //     const file = e.target.files[0];
// //     const formData = new FormData();
// //     formData.append("image", file);

// //     const res = await fetch("/api/upload-img", {
// //       method: "POST",
// //       body: formData,
// //     });

// //     const data = await res.json();
// //     setThumbPic(data);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     console.log(projectData);
// //   };

// //   return (
// //     <div className="parent__projectDetails px-16 py-8">
// //       <div>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-9">
// //             <h5 className="service__info mb-4">Service Information</h5>
// //             <HRSvg />
// //             <div className="mt-6 flex gap-10">
// //               <div className="w-full">
// //                 <label className="input__label mb-[10px] block w-full">
// //                   Service
// //                 </label>
// //                 <select
// //                   value={projectCat}
// //                   onChange={(e) => setProjectCat(e.target.value)}
// //                   className="dropdown__input block px-7 py-5 w-full"
// //                 >
// //                   <option value="" disabled>
// //                     Select Service Name
// //                   </option>
// //                   {servicesDropDown.map((service) => (
// //                     <option key={service.value} value={service.value}>
// //                       {service.label}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
// //               <div className="w-full">
// //                 <label className="input__label mb-[10px] block">
// //                   Company Name With Service
// //                 </label>
// //                 <select
// //                   value={projectCatHeading}
// //                   onChange={(e) => setProjectCatHeading(e.target.value)}
// //                   className="dropdown__input block px-7 py-5 w-full"
// //                 >
// //                   <option value="" disabled>
// //                     Select Company Name With Service
// //                   </option>
// //                   {serviceWithCompanyName.map((service) => (
// //                     <option key={service.value} value={service.value}>
// //                       {service.label}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
// //               <div className="w-full">
// //                 <label className="input__label mb-[10px] block">
// //                   Project Type
// //                 </label>
// //                 <select
// //                   value={projectType}
// //                   onChange={(e) => setProjectType(e.target.value)}
// //                   className="dropdown__input block px-7 py-5 w-full"
// //                 >
// //                   <option value="" disabled>
// //                     Select Project Type
// //                   </option>
// //                   {projectTypes.map((type) => (
// //                     <option key={type.value} value={type.value}>
// //                       {type.label}
// //                     </option>
// //                   ))}
// //                 </select>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="mb-9">
// //             <h5 className="service__info mb-4">Project Information</h5>
// //             <HRSvg />
// //             <div className="mt-6 flex gap-10">
// //               <div className="w-full">
// //                 <label className="input__label mb-[10px] block w-full">
// //                   Project Name
// //                 </label>
// //                 <input
// //                   value={projectName}
// //                   onChange={(e) => setProjectName(e.target.value)}
// //                   type="text"
// //                   className="dropdown__input block px-7 py-[18px] w-full"
// //                   placeholder="Enter Project Name"
// //                 />
// //               </div>
// //               <div className="w-full">
// //                 <label className="input__label mb-[10px] block w-full">
// //                   Picture
// //                 </label>
// //                 <label className="dropdown__input w-full flex justify-between items-center px-7 py-3">
// //                   <span className="text-lg">
// //                     {thumbPic ? thumbPic.name : "Select a file"}
// //                   </span>
// //                   <span className="text-base choose__file px-8 py-2">
// //                     Upload Picture
// //                   </span>
// //                   <input
// //                     onChange={uploadThumbImage}
// //                     type="file"
// //                     className="hidden"
// //                   />
// //                 </label>
// //               </div>
// //             </div>
// //             {thumbPic && (
// //               <div className="mt-3">
// //                 <p>Uploaded Project Image:</p>
// //                 <img
// //                   src={thumbPic ? thumbPic.url : ""}
// //                   alt="img"
// //                   className="h-[300px] w-[300px]"
// //                 />
// //               </div>
// //             )}
// //           </div>
// //           <div className="mb-9">
// //             <h5 className="service__info mb-4">Project Basic Info</h5>
// //             <HRSvg />
// //             <div>
// //               <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-10">
// //                 <div className="w-full">
// //                   <label className="input__label mb-[10px] block w-full">
// //                     Clients Name
// //                   </label>
// //                   <input
// //                     value={clientName}
// //                     onChange={(e) => setClientName(e.target.value)}
// //                     type="text"
// //                     className="dropdown__input block px-7 py-[18px] w-full"
// //                     placeholder="Enter Clients Name"
// //                   />
// //                 </div>
// //                 <div className="w-full">
// //                   <label className="input__label mb-[10px] block w-full">
// //                     City
// //                   </label>
// //                   <input
// //                     value={city}
// //                     onChange={(e) => setCity(e.target.value)}
// //                     type="text"
// //                     className="dropdown__input block px-7 py-[18px] w-full"
// //                     placeholder="Enter Client City"
// //                   />
// //                 </div>
// //                 <div className="w-full">
// //                   <label className="input__label mb-[10px] block w-full">
// //                     Budget
// //                   </label>
// //                   <input
// //                     value={budget}
// //                     onChange={(e) => setBudget(e.target.value)}
// //                     type="text"
// //                     className="dropdown__input block px-7 py-[18px] w-full"
// //                     placeholder="Enter your Budget"
// //                   />
// //                 </div>
// //                 <div className="w-full">
// //                   <label className="input__label mb-[10px] block w-full">
// //                     Complete Year
// //                   </label>
// //                   <select
// //                     className="dropdown__input block px-7 py-[18px] w-full mt-2"
// //                     value={completedYear}
// //                     onChange={(e) => setCompletedYear(e.target.value)}
// //                   >
// //                     <option value="" disabled>
// //                       Select Complete Year
// //                     </option>
// //                     {years.map((yr) => (
// //                       <option key={yr} value={yr}>
// //                         {yr}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>

// //               <div className="mt-9 mb-6">
// //                 <HRSvg />
// //               </div>
// //               <div className="grid grid-cols-12 items-center gap-y-6 gap-x-10 w-full mb-12">
// //                 <div className="w-full col-span-4">
// //                   <label className="input__label mb-[10px] block w-full">
// //                     Project Period
// //                   </label>
// //                   <select
// //                     value={projectPeriod}
// //                     onChange={(e) => setProjectPeriod(e.target.value)}
// //                     className="dropdown__input block px-7 py-[18px] w-full mt-2"
// //                   >
// //                     <option value="" disabled>
// //                       Select Project Period
// //                     </option>
// //                     {projectPeriods.map(({ label, value }, i) => (
// //                       <option key={i} value={value}>
// //                         {label}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
// //                 <div className="w-full col-span-5">
// //                   <label className="input__label mb-[10px] block w-full">
// //                     Picture
// //                   </label>
// //                   <label className="dropdown__input w-full flex justify-between items-center px-7 py-2">
// //                     <span className="text-lg">Select a file</span>
// //                     <span className="text-base choose__file px-8 py-2">
// //                       Upload Picture
// //                     </span>
// //                     <input type="file" className="hidden" />
// //                   </label>
// //                 </div>
// //                 <div className="w-full col-span-3 plus__upload">
// //                   <label className="mb-[10px] flex items-center mt-8  gap-2 w-full cursor-pointer">
// //                     <img
// //                       src="/assets/icons/addmore.png"
// //                       alt="add more"
// //                       className="w-10 h-10 rounded-full upload__img"
// //                     />
// //                     <span className="text-lg upload__text">Add More</span>
// //                     <input
// //                       onChange={uploadProjectImageHandler}
// //                       type="file"
// //                       className="hidden"
// //                     />
// //                   </label>
// //                 </div>
// //               </div>
// //               <>
// //                 {projectPeriod && (
// //                   <div className="preview__container">
// //                     <div className="flex gap-y-8 gap-x-[58px]">
// //                       <div className="flex items-center justify-center w-[270px] border-2 border-r-dark-50">
// //                         <div>
// //                           <p>Project Period</p>
// //                           <b className="text-start text-base">Before</b>
// //                         </div>
// //                       </div>
// //                       <div className="flex flex-wrap gap-5 py-10">
// //                         {showProjectPics &&
// //                           showProjectPics?.map((url, i) => (
// //                             <img
// //                               key={i}
// //                               src={url}
// //                               alt="img"
// //                               className="h-[112px] w-[160px]"
// //                             />
// //                           ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}
// //               </>
// //             </div>
// //           </div>
// //           <div className="flex justify-center">
// //             <button
// //               className="py-3 px-28 creat__project__btn text-white"
// //               type="submit"
// //             >
// //               Submit
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProjectDetailsForm;

// "use client";

// import {
//   getYears,
//   projectPeriods,
//   projectTypes,
//   serviceWithCompanyName,
//   servicesDropDown,
// } from "@/constants/projectDetails.dropdownValue";
// import "./ProjectDetailsForm.css";
// import { HRSvg } from "./HRSvg";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const ProjectDetailsForm = () => {
//   const [projectCat, setProjectCat] = useState("");
//   const [projectCatHeading, setProjectCatHeading] = useState("");
//   const [projectType, setProjectType] = useState("");
//   const [projectName, setProjectName] = useState("");
//   const [thumbPic, setThumbPic] = useState(null);
//   const [projectPics, setProjectPics] = useState({});
//   const [clientName, setClientName] = useState("");
//   const [city, setCity] = useState("");
//   const [budget, setBudget] = useState("");
//   const [completedYear, setCompletedYear] = useState("");
//   const [projectPeriod, setProjectPeriod] = useState("");

//   const years = getYears();

//   const projectData = {
//     projectCat,
//     projectCatHeading,
//     projectType,
//     projectName,
//     thumbPic,
//     clientName,
//     city,
//     budget,
//     completedYear,
//     projectPics,
//   };

//   const uploadThumbImage = async (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("image", file);

//     const res = await fetch("/api/upload-img", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();
//     setThumbPic(data);
//   };

//   const uploadProjectImageHandler = async (e) => {
//     if (!projectPeriod) {
//       toast.warn("Please first choose project period!!!");
//       return;
//     }
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("image", file);

//     const res = await fetch("/api/upload-img", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();
//     setProjectPics((prev) => ({
//       ...prev,
//       [projectPeriod]: [...(prev[projectPeriod] || []), data.url],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(projectData);
//   };

//   return (
//     <div className="parent__projectDetails px-16 py-8">
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-9">
//             <h5 className="service__info mb-4">Service Information</h5>
//             <HRSvg />
//             <div className="mt-6 flex gap-10">
//               <div className="w-full">
//                 <label className="input__label mb-[10px] block w-full">
//                   Service
//                 </label>
//                 <select
//                   value={projectCat}
//                   onChange={(e) => setProjectCat(e.target.value)}
//                   className="dropdown__input block px-7 py-5 w-full"
//                 >
//                   <option value="" disabled>
//                     Select Service Name
//                   </option>
//                   {servicesDropDown.map((service) => (
//                     <option key={service.value} value={service.value}>
//                       {service.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="w-full">
//                 <label className="input__label mb-[10px] block">
//                   Company Name With Service
//                 </label>
//                 <select
//                   value={projectCatHeading}
//                   onChange={(e) => setProjectCatHeading(e.target.value)}
//                   className="dropdown__input block px-7 py-5 w-full"
//                 >
//                   <option value="" disabled>
//                     Select Company Name With Service
//                   </option>
//                   {serviceWithCompanyName.map((service) => (
//                     <option key={service.value} value={service.value}>
//                       {service.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="w-full">
//                 <label className="input__label mb-[10px] block">
//                   Project Type
//                 </label>
//                 <select
//                   value={projectType}
//                   onChange={(e) => setProjectType(e.target.value)}
//                   className="dropdown__input block px-7 py-5 w-full"
//                 >
//                   <option value="" disabled>
//                     Select Project Type
//                   </option>
//                   {projectTypes.map((type) => (
//                     <option key={type.value} value={type.value}>
//                       {type.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="mb-9">
//             <h5 className="service__info mb-4">Project Information</h5>
//             <HRSvg />
//             <div className="mt-6 flex gap-10">
//               <div className="w-full">
//                 <label className="input__label mb-[10px] block w-full">
//                   Project Name
//                 </label>
//                 <input
//                   value={projectName}
//                   onChange={(e) => setProjectName(e.target.value)}
//                   type="text"
//                   className="dropdown__input block px-7 py-[18px] w-full"
//                   placeholder="Enter Project Name"
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="input__label mb-[10px] block w-full">
//                   Picture
//                 </label>
//                 <label className="dropdown__input w-full flex justify-between items-center px-7 py-3">
//                   <span className="text-lg">
//                     {thumbPic ? thumbPic.name : "Select a file"}
//                   </span>
//                   <span className="text-base choose__file px-8 py-2">
//                     Upload Picture
//                   </span>
//                   <input
//                     onChange={uploadThumbImage}
//                     type="file"
//                     className="hidden"
//                   />
//                 </label>
//               </div>
//             </div>
//             {thumbPic && (
//               <div className="mt-3">
//                 <p>Uploaded Project Image:</p>
//                 <img
//                   src={thumbPic ? thumbPic.url : ""}
//                   alt="img"
//                   className="h-[300px] w-[300px]"
//                 />
//               </div>
//             )}
//           </div>
//           <div className="mb-9">
//             <h5 className="service__info mb-4">Project Basic Info</h5>
//             <HRSvg />
//             <div>
//               <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-10">
//                 <div className="w-full">
//                   <label className="input__label mb-[10px] block w-full">
//                     Clients Name
//                   </label>
//                   <input
//                     value={clientName}
//                     onChange={(e) => setClientName(e.target.value)}
//                     type="text"
//                     className="dropdown__input block px-7 py-[18px] w-full"
//                     placeholder="Enter Clients Name"
//                   />
//                 </div>
//                 <div className="w-full">
//                   <label className="input__label mb-[10px] block w-full">
//                     City
//                   </label>
//                   <input
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     type="text"
//                     className="dropdown__input block px-7 py-[18px] w-full"
//                     placeholder="Enter Client City"
//                   />
//                 </div>
//                 <div className="w-full">
//                   <label className="input__label mb-[10px] block w-full">
//                     Budget
//                   </label>
//                   <input
//                     value={budget}
//                     onChange={(e) => setBudget(e.target.value)}
//                     type="text"
//                     className="dropdown__input block px-7 py-[18px] w-full"
//                     placeholder="Enter your Budget"
//                   />
//                 </div>
//                 <div className="w-full">
//                   <label className="input__label mb-[10px] block w-full">
//                     Complete Year
//                   </label>
//                   <select
//                     className="dropdown__input block px-7 py-[18px] w-full mt-2"
//                     value={completedYear}
//                     onChange={(e) => setCompletedYear(e.target.value)}
//                   >
//                     <option value="" disabled>
//                       Select Complete Year
//                     </option>
//                     {years.map((yr) => (
//                       <option key={yr} value={yr}>
//                         {yr}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="mt-9 mb-6">
//                 <HRSvg />
//               </div>
//               <div className="grid grid-cols-12 items-center gap-y-6 gap-x-10 w-full mb-12">
//                 <div className="w-full col-span-4">
//                   <label className="input__label mb-[10px] block w-full">
//                     Project Period
//                   </label>
//                   <select
//                     value={projectPeriod}
//                     onChange={(e) => setProjectPeriod(e.target.value)}
//                     className="dropdown__input block px-7 py-[18px] w-full mt-2"
//                   >
//                     <option value="" disabled>
//                       Select Project Period
//                     </option>
//                     {projectPeriods.map(({ label, value }, i) => (
//                       <option key={i} value={value}>
//                         {label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="w-full col-span-5">
//                   <label className="input__label mb-[10px] block w-full">
//                     Picture
//                   </label>
//                   <label className="dropdown__input w-full flex justify-between items-center px-7 py-2">
//                     <span className="text-lg">Select a file</span>
//                     <span className="text-base choose__file px-8 py-2">
//                       Upload Picture
//                     </span>
//                     <input
//                       onChange={uploadProjectImageHandler}
//                       type="file"
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//                 <div className="w-full col-span-3 plus__upload">
//                   <label className="mb-[10px] flex items-center mt-8  gap-2 w-full cursor-pointer">
//                     <img
//                       src="/assets/icons/addmore.png"
//                       alt="add more"
//                       className="w-10 h-10 rounded-full upload__img"
//                     />
//                     <span className="text-lg upload__text">Add More</span>
//                     <input
//                       onChange={uploadProjectImageHandler}
//                       type="file"
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               </div>
//               {Object.keys(projectPics).map((period) => (
//                 <div key={period} className="preview__container">
//                   <div className="flex gap-y-8 gap-x-[58px]">
//                     <div className="flex items-center justify-center w-[270px] border-2 border-r-dark-50">
//                       <div>
//                         <p>Project Period</p>
//                         <b className="text-start text-base">{period}</b>
//                       </div>
//                     </div>
//                     <div className="flex flex-wrap gap-5 py-10">
//                       {projectPics[period]?.map((url, i) => (
//                         <img
//                           key={i}
//                           src={url}
//                           alt="img"
//                           className="h-[112px] w-[160px]"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <button
//               className="py-3 px-28 creat__project__btn text-white"
//               type="submit"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetailsForm;

// "use client";

// import {
//   getYears,
//   projectPeriods,
//   projectTypes,
//   serviceWithCompanyName,
//   servicesDropDown,
// } from "@/constants/projectDetails.dropdownValue";
// import "./ProjectDetailsForm.css";
// import { HRSvg } from "./HRSvg";
// import { useState } from "react";
// import { toast } from "react-toastify";

// const ProjectDetailsForm = () => {
//   const [projectCat, setProjectCat] = useState("");
//   const [projectCatHeading, setProjectCatHeading] = useState("");
//   const [projectType, setProjectType] = useState("");
//   const [projectName, setProjectName] = useState("");
//   const [thumbPic, setThumbPic] = useState(null);
//   const [projectPics, setProjectPics] = useState({});
//   const [clientName, setClientName] = useState("");
//   const [city, setCity] = useState("");
//   const [budget, setBudget] = useState("");
//   const [completedYear, setCompletedYear] = useState("");
//   const [projectPeriod, setProjectPeriod] = useState("");

//   const years = getYears();

//   const projectData = {
//     projectCat,
//     projectCatHeading,
//     projectType,
//     projectName,
//     thumbPic,
//     clientName,
//     city,
//     budget,
//     completedYear,
//     projectPictures: Object.keys(projectPics).map((period) => ({
//       projectPeriod: period,
//       urls: projectPics[period],
//     })),
//   };

//   const uploadThumbImage = async (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("image", file);

//     const res = await fetch("/api/upload-img", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();
//     setThumbPic(data);
//   };

//   const uploadProjectImageHandler = async (e) => {
//     if (!projectPeriod) {
//       toast.warn("Please first choose project period!!!");
//       return;
//     }
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append("image", file);

//     const res = await fetch("/api/upload-img", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await res.json();
//     setProjectPics((prev) => ({
//       ...prev,
//       [projectPeriod]: [
//         ...(prev[projectPeriod] || []),
//         { name: data.name, url: data.url },
//       ],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/project-details", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(projectData),
//       });

//       if (!res.ok) {
//         throw new Error("Failed to save project details");
//       }

//       toast.success("Project details saved successfully!");
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to save project details");
//     }
//   };

//   console.log(projectPeriod, "project period");
//   console.log(projectPics, "project pics");

//   return (
//     <div className="parent__projectDetails px-16 py-8">
//       <div>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-9">
//             <h5 className="service__info mb-4">Service Information</h5>
//             <HRSvg />
//             <div className="mt-6 flex gap-10">
//               <div className="w-full">
//                 <label className="input__label mb-[10px] block w-full">
//                   Service
//                 </label>
//                 <select
//                   value={projectCat}
//                   onChange={(e) => setProjectCat(e.target.value)}
//                   className="dropdown__input block px-7 py-5 w-full"
//                 >
//                   <option value="" disabled>
//                     Select Service Name
//                   </option>
//                   {servicesDropDown.map((service) => (
//                     <option key={service.value} value={service.value}>
//                       {service.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="w-full">
//                 <label className="input__label mb-[10px] block">
//                   Company Name With Service
//                 </label>
//                 <select
//                   value={projectCatHeading}
//                   onChange={(e) => setProjectCatHeading(e.target.value)}
//                   className="dropdown__input block px-7 py-5 w-full"
//                 >
//                   <option value="" disabled>
//                     Select Company Name With Service
//                   </option>
//                   {serviceWithCompanyName.map((service) => (
//                     <option key={service.value} value={service.value}>
//                       {service.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="w-full">
//                 <label className="input__label mb-[10px] block">
//                   Project Type
//                 </label>
//                 <select
//                   value={projectType}
//                   onChange={(e) => setProjectType(e.target.value)}
//                   className="dropdown__input block px-7 py-5 w-full"
//                 >
//                   <option value="" disabled>
//                     Select Project Type
//                   </option>
//                   {projectTypes.map((type) => (
//                     <option key={type.value} value={type.value}>
//                       {type.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="mb-9">
//             <h5 className="service__info mb-4">Project Information</h5>
//             <HRSvg />
//             <div className="mt-6 flex gap-10">
//               <div className="w-full">
//                 <label className="input__label mb-[10px] block w-full">
//                   Project Name
//                 </label>
//                 <input
//                   value={projectName}
//                   onChange={(e) => setProjectName(e.target.value)}
//                   type="text"
//                   className="dropdown__input block px-7 py-[18px] w-full"
//                   placeholder="Enter Project Name"
//                 />
//               </div>
//               <div className="w-full">
//                 <label className="input__label mb-[10px] block w-full">
//                   Picture
//                 </label>
//                 <label className="dropdown__input w-full flex justify-between items-center px-7 py-3">
//                   <span className="text-lg">
//                     {thumbPic ? thumbPic.name : "Select a file"}
//                   </span>
//                   <span className="text-base choose__file px-8 py-2">
//                     Upload Picture
//                   </span>
//                   <input
//                     onChange={uploadThumbImage}
//                     type="file"
//                     className="hidden"
//                   />
//                 </label>
//               </div>
//             </div>
//             {thumbPic && (
//               <div className="mt-3">
//                 <p>Uploaded Project Image:</p>
//                 <img
//                   src={thumbPic ? thumbPic.url : ""}
//                   alt="img"
//                   className="h-[300px] w-[300px]"
//                 />
//               </div>
//             )}
//           </div>
//           <div className="mb-9">
//             <h5 className="service__info mb-4">Project Basic Info</h5>
//             <HRSvg />
//             <div>
//               <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-10">
//                 <div className="w-full">
//                   <label className="input__label mb-[10px] block w-full">
//                     Clients Name
//                   </label>
//                   <input
//                     value={clientName}
//                     onChange={(e) => setClientName(e.target.value)}
//                     type="text"
//                     className="dropdown__input block px-7 py-[18px] w-full"
//                     placeholder="Enter Clients Name"
//                   />
//                 </div>
//                 <div className="w-full">
//                   <label className="input__label mb-[10px] block w-full">
//                     City
//                   </label>
//                   <input
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     type="text"
//                     className="dropdown__input block px-7 py-[18px] w-full"
//                     placeholder="Enter Client City"
//                   />
//                 </div>
//                 <div className="w-full">
//                   <label className="input__label mb-[10px] block w-full">
//                     Budget
//                   </label>
//                   <input
//                     value={budget}
//                     onChange={(e) => setBudget(e.target.value)}
//                     type="text"
//                     className="dropdown__input block px-7 py-[18px] w-full"
//                     placeholder="Enter your Budget"
//                   />
//                 </div>
//                 <div className="w-full">
//                   <label className="input__label mb-[10px] block w-full">
//                     Complete Year
//                   </label>
//                   <select
//                     className="dropdown__input block px-7 py-[18px] w-full mt-2"
//                     value={completedYear}
//                     onChange={(e) => setCompletedYear(e.target.value)}
//                   >
//                     <option value="" disabled>
//                       Select Complete Year
//                     </option>
//                     {years.map((yr) => (
//                       <option key={yr} value={yr}>
//                         {yr}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div className="mt-9 mb-6">
//                 <HRSvg />
//               </div>
//               <div className="grid grid-cols-12 items-center gap-y-6 gap-x-10 w-full mb-12">
//                 <div className="w-full col-span-4">
//                   <label className="input__label mb-[10px] block w-full">
//                     Project Period
//                   </label>
//                   <select
//                     value={projectPeriod}
//                     onChange={(e) => setProjectPeriod(e.target.value)}
//                     className="dropdown__input block px-7 py-[18px] w-full mt-2"
//                   >
//                     <option value="" disabled>
//                       Select Project Period
//                     </option>
//                     {projectPeriods.map(({ label, value }, i) => (
//                       <option key={i} value={value}>
//                         {label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="w-full col-span-5">
//                   <label className="input__label mb-[10px] block w-full">
//                     Picture
//                   </label>
//                   <label className="dropdown__input w-full flex justify-between items-center px-7 py-2">
//                     <span className="text-lg">Select a file</span>
//                     <span className="text-base choose__file px-8 py-2">
//                       Upload Picture
//                     </span>
//                     <input
//                       onChange={uploadProjectImageHandler}
//                       type="file"
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//                 <div className="w-full col-span-3 plus__upload">
//                   <label className="mb-[10px] flex items-center mt-8  gap-2 w-full cursor-pointer">
//                     <img
//                       src="/assets/icons/addmore.png"
//                       alt="add more"
//                       className="w-10 h-10 rounded-full upload__img"
//                     />
//                     <span className="text-lg upload__text">Add More</span>
//                     <input
//                       onChange={uploadProjectImageHandler}
//                       type="file"
//                       className="hidden"
//                     />
//                   </label>
//                 </div>
//               </div>
//               {Object.keys(projectPics).map((period) => (
//                 <div key={period} className="preview__container">
//                   <div className="flex gap-y-8 gap-x-[58px]">
//                     <div className="flex items-center justify-center w-[270px] border-2 border-r-dark-50">
//                       <div>
//                         <p>Project Period</p>
//                         <b className="text-start text-base">{period}</b>
//                       </div>
//                     </div>
//                     <div className="flex flex-wrap gap-5 py-10">
//                       {projectPics[period]?.map((pic, i) => (
//                         <img
//                           key={i}
//                           src={pic.url}
//                           alt={pic.name}
//                           className="h-[112px] w-[160px]"
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <button
//               className="py-3 px-28 creat__project__btn text-white"
//               type="submit"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetailsForm;

"use client";

import {
  getYears,
  projectPeriods,
  projectTypes,
  serviceWithCompanyName,
  servicesDropDown,
} from "@/constants/projectDetails.dropdownValue";
import "./ProjectDetailsForm.css";
import { HRSvg } from "./HRSvg";
import { useState } from "react";
import { toast } from "react-toastify";

const ProjectDetailsForm = () => {
  const [projectCat, setProjectCat] = useState("");
  const [projectCatHeading, setProjectCatHeading] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectName, setProjectName] = useState("");
  const [thumbPic, setThumbPic] = useState(null);
  const [projectPics, setProjectPics] = useState({});
  const [clientName, setClientName] = useState("");
  const [city, setCity] = useState("");
  const [budget, setBudget] = useState("");
  const [completedYear, setCompletedYear] = useState("");
  const [projectPeriod, setProjectPeriod] = useState("");
  const [loading, setLoading] = useState(false);

  const years = getYears();

  const projectData = {
    projectCat,
    projectCatHeading,
    projectType,
    projectName,
    thumbPic,
    clientName,
    city,
    budget,
    completedYear,
    projectPictures: Object.keys(projectPics).map((period) => ({
      projectPeriod: period,
      urls: projectPics[period],
    })),
  };

  const uploadThumbImage = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload-img", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setThumbPic(data);
  };

  const uploadProjectImageHandler = async (e) => {
    // if (!projectPeriod) {
    //   toast.warn("Please first choose project period!!!");
    //   return;
    // }
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/upload-img", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log(data);

    setProjectPics((prev) => ({
      ...prev,
      [projectPeriod]: [
        ...(prev[projectPeriod] || []),
        { name: data.name, url: data.url },
      ],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    try {
      const res = await fetch("/api/project-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (!res.ok) {
        toast.error("Failed to save project details");
        return;
      }

      // Clear form fields on successful submission
      setProjectCat("");
      setProjectCatHeading("");
      setProjectType("");
      setProjectName("");
      setThumbPic(null);
      setProjectPics({});
      setClientName("");
      setCity("");
      setBudget("");
      setCompletedYear("");
      setProjectPeriod("");

      toast.success("Project details saved successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save project details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="parent__projectDetails px-16 py-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-9">
            <h5 className="service__info mb-4">Service Information</h5>
            <HRSvg />
            <div className="mt-6 flex gap-10">
              <div className="w-full">
                <label className="input__label mb-[10px] block w-full">
                  Service
                </label>
                <select
                  value={projectCat}
                  onChange={(e) => setProjectCat(e.target.value)}
                  className="dropdown__input block px-7 py-5 w-full"
                >
                  <option value="" disabled>
                    Select Service Name
                  </option>
                  {servicesDropDown.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="input__label mb-[10px] block">
                  Company Name With Service
                </label>
                <select
                  value={projectCatHeading}
                  onChange={(e) => setProjectCatHeading(e.target.value)}
                  className="dropdown__input block px-7 py-5 w-full"
                >
                  <option value="" disabled>
                    Select Company Name With Service
                  </option>
                  {serviceWithCompanyName.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full">
                <label className="input__label mb-[10px] block">
                  Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="dropdown__input block px-7 py-5 w-full"
                >
                  <option value="" disabled>
                    Select Project Type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mb-9">
            <h5 className="service__info mb-4">Project Information</h5>
            <HRSvg />
            <div className="mt-6 flex gap-10">
              <div className="w-full">
                <label className="input__label mb-[10px] block w-full">
                  Project Name
                </label>
                <input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  type="text"
                  className="dropdown__input block px-7 py-[18px] w-full"
                  placeholder="Enter Project Name"
                />
              </div>
              <div className="w-full">
                <label className="input__label mb-[10px] block w-full">
                  Picture
                </label>
                <label className="dropdown__input w-full flex justify-between items-center px-7 py-3">
                  <span className="text-lg">
                    {thumbPic ? thumbPic.name : "Select a file"}
                  </span>
                  <span className="text-base choose__file px-8 py-2">
                    Upload Picture
                  </span>
                  <input
                    onChange={uploadThumbImage}
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            {thumbPic && (
              <div className="mt-3">
                <p>Uploaded Project Image:</p>
                <img
                  src={thumbPic ? thumbPic.url : ""}
                  alt="img"
                  className="h-[300px] w-[300px]"
                />
              </div>
            )}
          </div>
          <div className="mb-9">
            <h5 className="service__info mb-4">Project Basic Info</h5>
            <HRSvg />
            <div>
              <div className="mt-6 grid grid-cols-3 gap-y-6 gap-x-10">
                <div className="w-full">
                  <label className="input__label mb-[10px] block w-full">
                    Clients Name
                  </label>
                  <input
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    type="text"
                    className="dropdown__input block px-7 py-[18px] w-full"
                    placeholder="Enter Clients Name"
                  />
                </div>
                <div className="w-full">
                  <label className="input__label mb-[10px] block w-full">
                    City
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    className="dropdown__input block px-7 py-[18px] w-full"
                    placeholder="Enter Client City"
                  />
                </div>
                <div className="w-full">
                  <label className="input__label mb-[10px] block w-full">
                    Budget
                  </label>
                  <input
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    type="text"
                    className="dropdown__input block px-7 py-[18px] w-full"
                    placeholder="Enter your Budget"
                  />
                </div>
                <div className="w-full">
                  <label className="input__label mb-[10px] block w-full">
                    Complete Year
                  </label>
                  <select
                    className="dropdown__input block px-7 py-[18px] w-full mt-2"
                    value={completedYear}
                    onChange={(e) => setCompletedYear(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Complete Year
                    </option>
                    {years.map((yr) => (
                      <option key={yr} value={yr}>
                        {yr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-9 mb-6">
                <HRSvg />
              </div>
              <div className="grid grid-cols-12 items-center gap-y-6 gap-x-10 w-full mb-12">
                <div className="w-full col-span-4">
                  <label className="input__label mb-[10px] block w-full">
                    Project Period
                  </label>
                  <select
                    value={projectPeriod}
                    onChange={(e) => setProjectPeriod(e.target.value)}
                    required
                    className="dropdown__input block px-7 py-[18px] w-full mt-2"
                  >
                    <option value="" disabled>
                      Select Project Period
                    </option>
                    {projectPeriods.map(({ label, value }, i) => (
                      <option key={i} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full col-span-5">
                  <label className="input__label mb-[10px] block w-full">
                    Picture
                  </label>
                  <label className="dropdown__input w-full flex justify-between items-center px-7 py-2">
                    <span className="text-lg">Select a file</span>
                    <span className="text-base choose__file px-8 py-2">
                      Upload Picture
                    </span>
                    <input
                      onChange={uploadProjectImageHandler}
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
                <div className="w-full col-span-3 plus__upload">
                  <label className="mb-[10px] flex items-center mt-8  gap-2 w-full cursor-pointer">
                    <img
                      src="/assets/icons/addmore.png"
                      alt="add more"
                      className="w-10 h-10 rounded-full upload__img"
                    />
                    <span className="text-lg upload__text">Add More</span>
                    <input
                      onChange={uploadProjectImageHandler}
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              {Object.keys(projectPics)
                .reverse()
                .map((period) => (
                  <div key={period} className="preview__container">
                    <div className="flex gap-y-8 gap-x-[58px]">
                      <div className="flex items-center justify-center w-[270px] border-2 border-r-dark-50">
                        <div>
                          <p>Project Period</p>
                          <b className="text-start text-base">{period}</b>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-5 py-10">
                        {projectPics[period]?.map((pic, i) => (
                          <img
                            key={i}
                            src={pic.url}
                            alt={pic.name}
                            className="h-[112px] w-[160px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="py-3 px-28 creat__project__btn text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectDetailsForm;
