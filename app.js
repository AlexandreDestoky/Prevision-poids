const Albs = document.querySelector(".Albs");
const Akg = document.querySelector(".Akg");
const Dlbs = document.querySelector(".Dlbs");
const Dkg = document.querySelector(".Dkg");
const btnCalcul = document.querySelector(".calcul");
const resultats = document.querySelector(".results");
const convLBS = 0.45359237;

const calculNbrSemaine = function(pourcentage,pActuel,pDesire) {
  let cpt = 0;
  do {
    pActuel = pActuel*(1-(pourcentage/100));
    cpt++;
  } while (pActuel > pDesire);
  return cpt;
}

Albs.addEventListener("input", e => {
  Akg.value = (e.target.value * convLBS).toFixed(2);
});

Akg.addEventListener("input", e => {
  Albs.value = (e.target.value / convLBS).toFixed(2);
});

Dlbs.addEventListener("input", e => {
  Dkg.value = (e.target.value * convLBS).toFixed(2);
});

Dkg.addEventListener("input", e => {
  Dlbs.value = (e.target.value / convLBS).toFixed(2);
});

btnCalcul.addEventListener("click", () => {
  if (!Albs.value || !Akg.value || !Dlbs.value || !Dkg.value) return;

  const txt = `Si vous suivez une perte de poids saine ( perdre entre 0.5 et 1% de votre masse par semaine ), 
  vous devriez arrivez à votre poids désiré entre ${calculNbrSemaine(1,Albs.value,Dlbs.value)} et ${calculNbrSemaine(0.5,Albs.value,Dlbs.value)} semaines`;
  resultats.innerText = txt;
  resultats.style = "border:1px solid #eee;";
});


