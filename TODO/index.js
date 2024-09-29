document.addEventListener( "DOMContentLoaded", () => {
	const list = document.querySelector("#list-container");
	const input = document.querySelector("#input-box");
	document.querySelector(".button").addEventListener( "click", () => {

		if (input.value != ""){
			const item = document.createElement("li");

			item.textContent = input.value;
			list.appendChild(item);
			input.value = "";
			let span = document.createElement("span");
			span.innerHTML = "\u00d7";
			item.appendChild(span);
		}
		else{
			alert("Please, enter something");
		}
		saveData();
	})
	list.addEventListener("click",(e)=>{
		if (e.target.tagName == "LI"){
			e.target.classList.toggle("checked");
			saveData();

		}
		else if (e.target.tagName == "SPAN"){
			e.target.closest("li").remove();
			saveData();

		}
	});


	function saveData(){
		localStorage.setItem("data",list.innerHTML)
	}

	function showTask(){
		list.innerHTML = localStorage.getItem("data");
	}
	showTask();
});
