function restyle(){
	let classes = ["random1", "random2", "random3", "random4"];
	let randomIndex = Math.floor(Math.random() * classes.length);
	let randomClass = classes[randomIndex]; 
	document.getElementById("titleID").classList.remove("random1", "random2", "random3", "random4");
	document.getElementById("titleID").classList.add(randomClass);

	
}

function generate(userName){
	let traits = ["funky", "groovy", "cool", "mysterious", "sassy", "mischievous", "bubbly", "feisty", "wicked", "fierce", "moody", "rogue"];
	let randomIndex = Math.floor(Math.random() * traits.length);
	let randomTrait = traits[randomIndex]; 
	let message = userName + " you are so " + randomTrait + "!"
	document.getElementById("titleID").textContent = message;
	restyle();
}



function main (event){
	event.preventDefault();
	const userName = document.getElementById("userName").value;

	generate(userName);



}