let text_latitude = document.querySelector('.latitude')
let text_longitude = document.querySelector('.longitude')

const geolocation = navigator.geolocation

geolocation.getCurrentPosition((position) => {
	let latitude = position.coords.latitude
	let longitude = position.coords.longitude

	// insere latitude e longitude na tela
	text_latitude.insertAdjacentHTML("beforeEnd", latitude)
	text_longitude.insertAdjacentHTML("beforeEnd", longitude)

	//url do Google maps, pesquisando as coordenadas atuais
	let google_maps = 'https://www.google.com.br/maps/search/' + latitude + ',' + longitude + '/'
	
	var link_gm = document.getElementById("google_maps")

	// insere texto à tag a
	link_gm.innerHTML = "Acesse seu endereço no Google Maps"
	
	// muda o href dessa tag
	link_gm.setAttribute('href', google_maps)
})