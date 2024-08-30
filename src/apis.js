

const api = 'https://backend-db-3iwb.onrender.com'
const getMentorData = async()=>{
 const responce = await fetch(`${api}/mentor`)
 return await responce.json();
}
const getStudentsData = async()=>{
    const responce = await fetch(`${api}/student`)
    return await responce.json();
   }
const createMentorData = async(userData)=>{
    const responce = await fetch(`${api}/mentor`,{
        method:'POST',
        body:JSON.stringify(userData),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    })
   return await responce.json()
    
}
const createStudentData = async(userData)=>{
    const responce = await fetch(`${api}/student`,{
        method:'POST',
        body:JSON.stringify(userData),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    })
   return await responce.json()
    
}
const assignStudentData = async(mentorId)=>{
    const responce = await fetch(`${api}/mentor/${mentorId}`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    })
   return await responce.json()
}
const selectStudentData = async(id)=>{
    const responce = await fetch(`${api}/select-student/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    })
   return await responce.json()
}
const assignMentorData = async(userData)=>{
    const responce = await fetch(`${api}/student`,{
        method:'PUT',
        body:JSON.stringify(userData),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    })
   return await responce.json()
}
export {getMentorData,getStudentsData,createMentorData,createStudentData,assignStudentData,selectStudentData,assignMentorData} 