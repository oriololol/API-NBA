const res = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		const res = JSON.parse(this.response);

		console.log(res)
		
		document.querySelector('#nombre').innerHTML = res.data[0].first_name;
		document.querySelector('#llinatge').innerHTML = res.data[0].last_name;
		document.querySelector('#posicio').innerHTML = res.data[0].position;
		document.querySelector('#equipo').innerHTML = res.data[0].team.full_name;
		document.querySelector('#peso').innerHTML = res.data[0].weight_pounds
		document.querySelector('#altura1').innerHTML = res.data[0].height_feet;
		document.querySelector('#altura2').innerHTML = res.data[0].height_inches;
		document.querySelector('#conference').innerHTML = res.data[0].team.conference;
		let img = document.querySelector('#img') 
		let vid = document.querySelector('#vid')
		let img2 = document.querySelector('#img2')
		var principal = res.data[0].first_name
		var llinatge = res.data[0].last_name
		var equipo = res.data[0].team.full_name;
		img.src ="img/"+principal+"_"+llinatge+".png"
		vid.src="vid/"+principal+"_"+llinatge+".mp4"
		img2.src = "img2/"+equipo+".png"
		
	}
	
	
});



let nom= prompt('nom')

xhr.open('GET', 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25&search='+nom);
xhr.setRequestHeader('X-RapidAPI-Key', 'a89c4d901fmshd59879c81b6eacdp10407cjsn17a1b75e1e48');
xhr.setRequestHeader('X-RapidAPI-Host', 'free-nba.p.rapidapi.com');

xhr.send(res);
