(function() {
	function decToBin(decimal){
		var binaryArr = [];
		while((decimal/2) >= 1){
			binaryArr.push(decimal%2);
			decimal = Math.floor(decimal/2);
		}
		binaryArr.push(1);
		var binary = binaryArr.reverse().toString().replace(/,/g, '');
		return parseInt(binary);
	}



	function binToDec(binary){
		var binaryArr = binary.toString().split("").reverse().map(i => parseInt(i,10));
		var decimal = 0;
		for(i=0;i<binaryArr.length;i++){
			decimal+= binaryArr[i]*Math.pow(2, i);
		}
		return decimal;
	}



	function octToDec(octal){
		var octalArr = octal.toString().split("").reverse().map(i => parseInt(i,8));
		var decimal = 0;
		for(i=0;i<octalArr.length;i++){
			decimal+= octalArr[i]*Math.pow(8, i);
		}
		return decimal;
	}



	function decToOct(decimal){
		var octArr = [];
		while((decimal/8) >= 1){
			octArr.push(decimal%8);
			decimal = Math.floor(decimal/8);
		}
		octArr.push(decimal);
		var decimal = octArr.reverse().toString().replace(/,/g, '');
		return parseInt(decimal);
	}



	function hexCaseNumber(hex){
		switch(hex){
			case 15:
				hex = "F";
				break;
			case 14:
				hex = "E";
				break;
			case 13:
				hex = "D";
				break;
			case 12:
				hex = "C";
				break;
			case 11:
				hex = "B";
				break;
			case 10:
				hex = "A";
				break;
		}
		return hex;
	}
	function decToHex(decimal){
		var hexArr = [];
		while((decimal/16) >= 1){
			hexArr.push(decimal%16);
			decimal = Math.floor(decimal/16);
		}
		hexArr.push(decimal);
		hexArr = hexArr.map(i => hexCaseNumber(i));
		var decimal = hexArr.reverse().toString().replace(/,/g, '');
		return decimal;
	}
	function hexCaseChar(hex){
		switch(hex){
			case "F":
				hex = 15;
				break;
			case "E":
				hex = 14;
				break;
			case "D":
				hex = 13;
				break;
			case "C":
				hex = 12;
				break;
			case "B":
				hex = 11;
				break;
			case "A":
				hex = 10;
				break;
		}
		return hex;
	}
	function hexToDec(hex){
		var hexArr = hex.split("").reverse().map(i => hexCaseChar(i)).map(i => parseInt(i));
		var decimal = 0;
		for(i=0;i<hexArr.length;i++){
			decimal+= hexArr[i]*Math.pow(16, i);
		}
		return decimal;
	}
 

	function initEventHandlers(){
		//function click button add
		$('button.decToBin').click(function(){
			var dec = $('input.dec1').val();
			$('input.bin1').val(decToBin(dec));
		});	

		$('button.binToDec').click(function(){
			var bin = $('input.bin2').val();
			$('input.dec2').val(binToDec(bin));
		});	

		$('button.decToOct').click(function(){
			var dec = $('input.dec3').val();
			$('input.oct3').val(decToOct(dec));
		});	

		$('button.octToDec').click(function(){
			var oct = $('input.oct4').val();
			$('input.dec4').val(octToDec(oct));
		});	

		$('button.decToHex').click(function(){
			var dec = $('input.dec5').val();
			$('input.hex5').val(decToHex(dec));
		});	

		$('button.hexToDec').click(function(){
			var hex = $('input.hex6').val();
			$('input.dec6').val(hexToDec(hex));
		});	
	}

	initEventHandlers();
	
})()

