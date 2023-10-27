
import {API_BASE_URL} from "@env"

export const createManager= async (managerDetails,authDispatch)=>
{
    try {
        const response = await fetch(`${API_BASE_URL}/signup` , {
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(managerDetails)
        })
        const data= await response.json()
        authDispatch({type:"CREATE_USER", payload:data})
    }
    catch(error)
    {
        console.log(error);
    }
}

export const createOrganization = async(organizationDetails,authDispatch)=>
{
    try{
        const response = await fetch(`${API_BASE_URL}/organizations`,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(organizationDetails)
        })
        authDispatch({type:"USER_REGISTERED"})
    }
    catch(error)
    {
        console.log(error);
    }
}