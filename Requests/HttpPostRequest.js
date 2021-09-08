const http = require('https');
const axios = require('axios');

const data = JSON.stringify({
    name: "Ali Mughal",
    Job: "Web Developer"
});

const options = {
    hostName: 'reqres.in',
    path: '/api/users',
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    }
};

// Request

const req = http.request(options, (res)=> {
    let body = '';
    console.log("Status Code:",res.statusCode)

    res.on('data', (chunk)=>{
        body += chunk;
    });

    res.on('end',()=> {
        console.log("Body:",JSON.parse(body));
    })
})

req.write(data);
req.end();


// Request By Axios

axios.post('https://reqres.in/api/users',data).then(res=>{
    console.log(`The response code is ${res.status}`);
    console.log(`Body ${JSON.stringify(res.data)}`);
}).catch(err =>{
    console.log(err)
})