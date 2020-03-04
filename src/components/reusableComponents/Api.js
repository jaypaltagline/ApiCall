import axios from "axios";
let baseUrl = 'https://jsonplaceholder.typicode.com/'
export const request = (
    requestMethod,
    url,
    headers,
    params,
    body,
    contentType = "json",
) =>
    new Promise((resolve, reject) => {
        baseUrl+= url
        axios({
            method: requestMethod,
            url: baseUrl,
            data: body,
            headers: headers,
            params: params
        })
            .then(res => {
                if(res.status===200){
                resolve(res.data)
                }
            })
            .catch(err => reject(err));
    });