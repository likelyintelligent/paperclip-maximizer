// Game names:
// Paperclip Maximizer
// 1,000,000 Paperclips
//
//
// Main Themes/Concepts:
// - Research vs Dumb Production
// - Exponential Growth


// Action Cards, Research Cards
const ACTION_CARD = "Action Card";
const RESEARCH_CARD = "Research Card";
const CARD_TYPES = [];

function Card(options) {
	_this = this;

	// returns a dom representation of the card
	this.print = function() {
		var card = document.createElement("div");
		card.className = "card";
		
		// set type
		if (this.type) {
			var type = document.createElement('div');
			type.className = "type";
			type.appendChild(document.createTextNode(_this.type));
			card.appendChild(type);
		}
		
		// set title
		if (this.title) {
			var title = document.createElement('div');
			title.className = "title";
			title.appendChild(document.createTextNode(_this.title));
			card.appendChild(title);
		}
		
		// set image
		if (this.image) {
			var image = document.createElement('img');
			image.className = "image";
			image.appendChild(document.createTextNode(_this.image));
			card.appendChild(image);
		}
		
		// set description
		if (this.description) {
			var description = document.createElement('div');
			description.className = "description";
			description.appendChild(document.createTextNode(_this.description));
			card.appendChild(description);
		}
		
		// set effects
		if (this.effects.length > 0) {
			for (var i = 0; i < this.effects.length; i++) {
				var effect = document.createElement('div');
				description.className = "effect";
				card.appendChild(effect);
			}
		}
		
		return card;
	}

	// constructor
	this.image = options.image;
	this.title = options.title;
	this.description = options.description;
	this.effects = options.effects;
	this.type = options.type;
	this.age = options.age;
}

// effect = {var: 'trust', target: PLAYER, mod: '-', val: 1}
// effect = {var: 'trust', target: PLAYER, mod: '==', val: 10}

// Ages
// 1: Information Age
// 2: 
// 3: 
// 4: Singularity Age
// 5: 
const START_UP_AGE = 'Start Up Age';
const AGE_TYPES = [];
function Deck(options) {

	// constructor
	this.age = options.age;
	this.cards = options.cards;
}

// Companies:
// Likely Intelligent
// 
function Company(options) {
	
	// constructor
	this.cards = options.cards;
	this.trust = options.trust;
	this.paperclips = options.paperclips;
}

function Game(options) {
	
	// constructor
	this.decks = decks;
}

function PrintSheet(options) {

	this.print = function() {
		var sheet = document.createElement('div');
		sheet.className = "sheet";
		for (var i = 0; i < this.cards.length; i++) {
			sheet.appendChild(this.cards[i].print());
		}
		document.body.appendChild(sheet);
	}
	
	// constructor
	this.cards = options.cards;
}

new PrintSheet({
	cards: [
		new Card({
			title: '',
			description: '',
			effects: [],
			type: ACTION_CARD,
			age: START_UP_AGE
		})
	]
}).print();




