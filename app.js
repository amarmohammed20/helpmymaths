const currentDate = new Date().toString()
const footerYear = currentDate.substring(10,15)
const footerMessage = `&copy; ${footerYear} some message to scare people from copying`

document.getElementById("footer").innerHTML = footerMessage;