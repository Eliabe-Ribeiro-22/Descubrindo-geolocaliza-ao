let text_latitude = document.querySelector('.latitude')
let text_longitude = document.querySelector('.longitude')

const geolocation = navigator.geolocation;

geolocation.getCurrentPosition((position) => {
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;


	text_latitude.insertAdjacentHTML("beforeEnd", latitude)
	text_longitude.insertAdjacentHTML("beforeEnd", longitude)
})