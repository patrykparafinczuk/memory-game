var array_holder = [];
function startGame() {
	var pools = document.getElementsByClassName("image-pool");
	var array_png = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
	var images_sources = document.getElementsByClassName("images");
	var array_picker;
	var array_index;
	for(var i=0;i<16;i++) {
		do {
			images_sources[i].style.visibility = "hidden";
			array_picker = Math.floor(Math.random()*16);
			array_index = array_png[array_picker];
			if (array_index!="none") {
				array_holder[i] = "images/"+array_index+".png";
				array_png[array_picker] = "none";
				array_index = "none";
			}
			else {
				array_index = "";
				array_picker = -1;
			}
		}
		while(array_index != "none");
		var array_index;
		pools[i].style.visibility = "visible";
	}
}
function comparizer(n) {
	var images_sources = document.getElementsByClassName("images");
	images_sources[n].src = array_holder[n];
	images_sources[n].style.visibility = "visible";
	
}
