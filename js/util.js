
const recipeKey = 'recipeId='

export function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

export function addCookie(id) {
	document.cookie = recipeKey + id
}

export function getRecipeId() {
	return document
		.cookie
		.split(';')
		.map(s => s.trim())
		.find(value => value.startsWith(recipeKey))
		.replace(recipeKey, '')
}

export function removeCookies(){
	/*
	const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
		*/
}