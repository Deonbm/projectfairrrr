import commonAPI from "./commonApi";
import server_url from './server_url'

// register

export const registerAPI=async(reqBody)=>{
  console.log(server_url);
  
   return await commonAPI("POST",`${server_url}/register`,reqBody)
}   

// login
export const loginAPI=async(reqBody)=>{
   return await commonAPI("POST",`${server_url}/login`,reqBody)
}

// Add project
 export const addProjectAPI=async(reqBody,reqHeader)=>{
   return await commonAPI("POST",`${server_url}/add-project`,reqBody,reqHeader)
 }

//  gethomeprojects
export const HomeProjectsAPI=async()=>{
   return await commonAPI("GET",`${server_url}/get-home-projects`,"")
 }

// getallprojects
 export const AllProjectsAPI=async(searchKey,reqHeader)=>{
   return await commonAPI("GET",`${server_url}/get-all-projects?search=${searchKey}`,"",reqHeader)
 } 

// getallprojects
export const UserProjectsAPI=async(reqHeader)=>{
   return await commonAPI("GET",`${server_url}/get-user-projects`,"",reqHeader)
 } 


//update-project

export const updateProjectAPI=async(pid,reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${server_url}/edit/project/${pid}`,reqBody,reqHeader)
}

export const deleteProjectAPI=async(pid,reqHeader)=>{
  return await commonAPI("DELETE",`${server_url}/remove/project/${pid}`,{},reqHeader)
}

// update profile

export const updateProfileAPI=async(reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${server_url}/edit/profile/`,reqBody,reqHeader)
}