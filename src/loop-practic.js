import "/style.scss";

const dnaWrapEl = document.getElementById("dnaWrap");

function createDnaRow(index) {
  if (dnaWrapEl) {
    const dnaRowEl = document.createElement("div");
    /* dnaRowEl.innerHTML =`<p class="absolute end-2/4  text-sm">${
    }</p>`; */
    dnaRowEl.classList.add("dna-row");
    dnaWrapEl.appendChild(dnaRowEl);
  }
}

let i = 0;
while (i < 40) {
  createDnaRow(i);
  i++;
}
