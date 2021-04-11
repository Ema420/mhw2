document.body.onload = addElement;

function addElement(){
	const currentDiv = document.querySelector('.content');
	
	//Preferiti
	const favArticle = document.createElement('article');
	favArticle.className = 'hidden';
	const favText = document.createElement('h2');
	favText.textContent = 'Preferiti';
	currentDiv.appendChild(favArticle);
	favArticle.appendChild(favText);
	const newSection = document.createElement('section');
	favArticle.appendChild(newSection);
	newSection.className = 'preferiti';
	
	for ( const content of contenuti){		
		
		const newDiv = document.createElement('div');
		newDiv.classList.add('hidden1');
		newDiv.id = contenuti.indexOf(content);
		const title = document.createElement('span');
		title.textContent = content.titolo;
		const favorite = document.createElement('img');
		favorite.src = 'rem.png';
		favorite.className = 'icon';
		const detButton = document.createElement('button');
		detButton.textContent = 'Mostra Dettagli';
		detButton.className = 'infop';
		const description = document.createElement('p');
		description.textContent = content.descrizione;
		description.classList.add('hidden');
		const image = document.createElement('img');
		image.src = content.image;
		
		newSection.appendChild(newDiv);
		newDiv.appendChild(title);
		title.appendChild(favorite);
		newDiv.appendChild(image);
		newDiv.appendChild(detButton);
		newDiv.appendChild(description);
		
		favorite.addEventListener('click', removeFavorite);
		detButton.addEventListener('click', showDetails);
	}
	
	//Intestazione
	const newArticle= document.createElement('article');
	newArticle.id = 'elementi';
	const firstDiv = document.createElement('div');
	firstDiv.className = 'principle';
	const intestazione = document.createElement('h2');
	intestazione.textContent = 'Eventi presenti nel database';
	const textSearch = document.createElement('em');
	textSearch.textContent = 'Cerca  ';
	const search = document.createElement('input');
	currentDiv.appendChild(firstDiv);
	firstDiv.appendChild(intestazione);
	firstDiv.appendChild(textSearch);
	textSearch.appendChild(search);
	currentDiv.appendChild(newArticle);
	
	//Contenuti
	for ( const content of contenuti){		
		
		const newDiv = document.createElement('div');
		newDiv.classList.add('show');
		newDiv.id = contenuti.indexOf(content);
		const title = document.createElement('span');
		title.textContent = content.titolo;
		const favorite = document.createElement('img');
		favorite.src = 'add.png';
		favorite.className = 'icon';
		const detButton = document.createElement('button');
		detButton.textContent = 'Mostra Dettagli';
		detButton.className = 'info';
		const description = document.createElement('p');
		description.textContent = content.descrizione;
		description.classList.add('details');
		description.id = contenuti.indexOf(content);
		const image = document.createElement('img');
		image.src = content.image;
		
		newArticle.appendChild(newDiv);
		newDiv.appendChild(title);
		title.appendChild(favorite);
		newDiv.appendChild(image);
		newDiv.appendChild(detButton);
		newDiv.appendChild(description);
		
		favorite.addEventListener('click', addFavorite);
		detButton.addEventListener('click', showDetails);
		
	}
	
	//Eventi
	search.addEventListener('keyup', searchContent);

}

function addFavorite(event){
	const element = event.currentTarget;
	const fav = document.getElementById(element.parentNode.parentNode.id);
	const favArticle = document.querySelector('.hidden');
	if (favArticle.className === 'hidden'){
		favArticle.id = 'fav';
	}
	fav.classList.remove('hidden1');
	fav.classList.add('show');
	
	element.removeEventListener('click', addFavorite);
	element.addEventListener('click', addFavorite);
}

function removeFavorite(event){
	const element = event.currentTarget;
	const fav = document.getElementById(element.parentNode.parentNode.id);
	const favArticle = document.querySelector('.hidden');
	if (favArticle.className === 'hidden'){
		favArticle.id = 'fav';
	}
	fav.classList.remove('show');
	fav.classList.add('hidden1');
	
	//Rimozione Barra Preferiti
	const checks = document.querySelectorAll('.preferiti div');
	let i = 0;
	for (const check of checks) {
		if (check.className === 'hidden1') {
			i++;
		}
	}
	if (i === checks.length) {
		favArticle.removeAttribute('id');
	}
	
}

function showDetails(event){
	const boxDetail = event.currentTarget;
	
	if(boxDetail.className === 'info'){
		if (boxDetail.textContent === 'Mostra Dettagli'){
			boxDetail.textContent = 'Nascondi Dettagli';
		} else {
			boxDetail.textContent = 'Mostra Dettagli';
		}

		const detail = document.querySelectorAll('.details');
		for (const det of detail){
			if (det.id === boxDetail.parentNode.id){
				det.classList.remove('details');
				det.classList.add('show1');
			}
		}
		
		event.currentTarget.addEventListener('click', removeDetails);
		event.currentTarget.removeEventListener('click', showDetails);
	} else {
		if (boxDetail.textContent === 'Mostra Dettagli'){
			boxDetail.textContent = 'Nascondi Dettagli';
		} else {
			boxDetail.textContent = 'Mostra Dettagli';
		}
	
		const detail = document.querySelectorAll('.hidden p');
		for (const det of detail){
			if (det.parentNode.id === boxDetail.parentNode.id){
				console.log('eccomi');
				det.classList.remove('hidden');
				det.classList.add('show1');
			}
		}
	
		event.currentTarget.addEventListener('click', removeDetails);
		event.currentTarget.removeEventListener('click', showDetails);
	}
}

function removeDetails(event){
	const boxDetail = event.currentTarget;
	
	if(boxDetail.className === 'info'){
		if (boxDetail.textContent === 'Nascondi Dettagli'){
			boxDetail.textContent = 'Mostra Dettagli';
		} else {
			boxDetail.textContent = 'Nascondi Dettagli';
		}

		const detail = document.querySelectorAll('.show1');
		for (const det of detail){
			if (det.id === boxDetail.parentNode.id){
				det.classList.remove('show1');
				det.classList.add('details');
			}
		}
		event.currentTarget.addEventListener('click', showDetails);
		event.currentTarget.removeEventListener('click', removeDetails);
	} else {
		if (boxDetail.textContent === 'Mostra Dettagli'){
			boxDetail.textContent = 'Nascondi Dettagli';
		} else {
			boxDetail.textContent = 'Mostra Dettagli';
		}
	
		const detail = document.querySelectorAll('.hidden p');
		for (const det of detail){
			if (det.parentNode.id === boxDetail.parentNode.id){
				console.log('eccomi');
				det.classList.remove('show1');
				det.classList.add('hidden');
			}
		}
		event.currentTarget.addEventListener('click', showDetails);
		event.currentTarget.removeEventListener('click', removeDetails);
	}
}


function searchContent(event){
	const inputValue = document.querySelector('input').value.toUpperCase();
	const contents = document.querySelectorAll('#elementi span');
	
	for (const content of contents) {
		const temp = content.textContent.toUpperCase();
		for ( let i = 0; i<temp.length; i++) {
			if (temp.includes(inputValue)){
				content.parentNode.classList.add('show');
				content.parentNode.classList.remove('hidden');
			} else {
				content.parentNode.classList.remove('show');
				content.parentNode.classList.add('hidden');
			}	
		}
	}
}
