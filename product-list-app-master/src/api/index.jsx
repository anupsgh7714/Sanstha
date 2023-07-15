// const API_URL = 'https://fakestoreapi.com/products'
const API_URL = 'http://127.0.0.1:8000/chart-data/'

const fetchData = async (url) =>{
    // const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5MzM4MjA5LCJpYXQiOjE2ODkzMzcwMDksImp0aSI6IjUwNDczOTEzNDAyNTRiMGM4NmVmYjJkYzYwNDNiODczIiwidXNlcl9pZCI6M30.h4E-RXgl63mIr8x9xKf8RqUlP1Hdz4WYNV4ZojIU0p0' };
    // const response = await fetch(url, {headers});
    const response = await fetch(url);
    const data = await response.json();
    console.log("fdetched data = ", data)
    return data;
}
export const fetchProducts = (param = "all" ) => {
    // const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg5MzM4MjA5LCJpYXQiOjE2ODkzMzcwMDksImp0aSI6IjUwNDczOTEzNDAyNTRiMGM4NmVmYjJkYzYwNDNiODczIiwidXNlcl9pZCI6M30.h4E-RXgl63mIr8x9xKf8RqUlP1Hdz4WYNV4ZojIU0p0' };
    // if(param === "all") return fetchData(API_URL, {headers});
    // if(param === "all") return fetchData(API_URL, { mode: 'no-cors'});
    // return fetchData(`${API_URL}/category/${param}`);
    return fetchData(`${API_URL}`);
}