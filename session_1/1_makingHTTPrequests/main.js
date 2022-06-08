//sample XML Http Request
const header = document.createElement('p');
header.textContent = 'Sample';
document.body.appendChild(header);


const myReq = new XMLHttpRequest();

myReq.onload = function(){
    const data = JSON.parse(this.responseText)
    header.textContent= data.joke;
}

myReq.onerror = function(err){
    console.log('ERROR!!', err);
}

myReq.open('get', 'https://icanhazdadjoke.com/', true)
myReq.setRequestHeader('Accept', 'application/json')
myReq.send()


//sample fetch request
fetch('https://icanhazdadjoke.com', {
    headers:{
        accept: 'application/json'
    }
}).then((res)=>{
    if(res.status !== 200){
        console.log('problem!', res.status)
        return;
    }
    res.json().then((data)=>{
        console.log(data)
    })
}).catch(function(err){
    console.log('Fetch Error', err)
})


//sample axios request
axios
	.get('https://swapi.co/api/planetaslkjdaklsjds/') //BAD URL!
	.then((res) => {
		//We don't need to check for a 200 status code, because...
		//Axios will reject the promise for us, unlike fetch!
		console.log(res.data);
	})
	.catch((err) => {
		//In this example with a not-found URL, this callback will run...
		console.log('IN CATCH CALLBACK!!!');
		console.log(err);
	});

