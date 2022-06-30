import axios from "axios";

export async function getPessoas()
{
    const response = await axios.get('http://localhost:4000/pessoas');
    if(response) return response;
    else return null;
}

export async function getSetores()
{
    const response = await axios.get('http://localhost:4000/setores');
    if(response) return response;
    else return null;
}

export async function getFeedbacks()
{
    const response = await axios.get('http://localhost:4000/feedbacks');
    if(response) return response;
    else return null;
}