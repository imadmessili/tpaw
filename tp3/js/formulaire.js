

	alert("Ce code à été testé plusieurs fois et il fonctionne bien merci de signaler tout bug à IMAD");


	function validation(){
				var er = document.getElementById('error');
				var result = document.getElementById('resultat');
				var name = document.getElementById('nom').value;
				var surname = document.getElementById('prenom').value;
				var dte = document.getElementById('date').value;
				var addr = document.getElementById('adresse').value;
				var ml = document.getElementById('mail').value;
				

				if (name.length<5) {
									er.style.display = "block";
									result.style.display = "none";
									er.innerHTML = "La saisie du Nom est obligatoire (au minimum 5 caractères)";
				}
				else if (surname.length<5) {
									er.style.display = "block";
									result.style.display = "none";
									er.innerHTML = "La saisie du Prénom est obligatoire (au minimum 5 caractères)";
				}
				else if (dte.length<5) {
									er.style.display = "block";
									result.style.display = "none";
									er.innerHTML = "La saisie de la date est obligatoire (au minimum 5 caractères)";
				}
				else if (addr.length<5) {
									er.style.display = "block";
									result.style.display = "none";
									er.innerHTML = "La saisie de l'adresse est obligatoire (au minimum 5 caractères)";
				}
				else if (ml.length<5) {
									er.style.display = "block";
									result.style.display = "none";
									er.innerHTML = "La saisie de l'email est obligatoire (au minimum 5 caractères)";
				}
				else{
									result.style.display = "block";
									er.style.display = "none";
									result.innerHTML = "Bienvenue " + document.querySelector("#nom").value;

				}

			}