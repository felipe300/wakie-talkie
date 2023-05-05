let btn = document.getElementById("btn")
let isSent = false

function displayMessage (info) {
	document.getElementById("response").innerHTML = info
}

btn.addEventListener("click", (e) => {
	e.preventDefault()
	let response = document.getElementById("response")

	let promise = new Promise((resolve, reject) => {
		if (!isSent) {
			resolve(`Mensaje enviado`)
			response.classList.add("isOk")
			isSent = true
		} else {
			reject("Ya has enviado un mensaje. No puedes enviar otro mensaje.")
			response.classList.add("isError")
		}
	})

	promise
		.then((message) => {
			displayMessage(message)
		})
		.catch((err) => {
			displayMessage(err)
		})

	setTimeout(() => {
		response.innerHTML = ''
		response.classList.remove("isOk")
		response.classList.remove("isError")
	}, 2000)
})
