const modals = document.querySelectorAll(".modal");


for (let i = 0; i < modals.length; i++) {
    let modal = document.getElementById(`myModal${i}`);

    let img = document.getElementById(`myImg${i}`);
    let modalImg = document.getElementById(`img${i}`);
    let captionText = document.getElementById(`caption${i}`);
    let projectDescription = document.getElementById(`project-description${i}`)

    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      console.log(projectDescription.textContent)
      let msg = `
      ${this.alt} <br>
      ${projectDescription.innerHTML}
      `

      captionText.innerHTML = msg;
    }
    
    // Get the <span> element that closes the modal
    /* let span = document.getElementsByClassName("close")[i]; */
    
    // When the user clicks on <span> (x), close the modal
    modal.onclick = function() { 
      modal.style.display = "none";
    }
    
}