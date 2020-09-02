const getInput = require('readline');

console.log(getInput);

const input = getInput.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

const seatFilling = (input) => {
	let seats=[];
	for(let i=0;i<input.length;i++)
	  	seats.push(Array(input[i][0]).fill().map(()=>Array(input[i][1]).fill("M")));
	
	for(let i=0;i<seats.length;i++){
		for(let j=0;j<seats[i].length;j++){  
	  		seats[i][j][0]="A";
			seats[i][j][seats[i][j].length-1]="A";
		}
	  }

	  for(let i=0;i<seats[0].length;i++)
	  	seats[0][i][0]="W";
	  for(let i=0;i<seats[seats.length-1].length;i++)
		seats[seats.length-1][i][(seats[seats.length-1][i].length)-1]="W";
	  
	return seats;
}


