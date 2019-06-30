const modals = document.querySelectorAll(".modal");


for (let i = 0; i < modals.length; i++) {
    let modal = document.getElementById(`myModal${i}`);

    let img = document.getElementById(`myImg${i}`);
    let modalImg = document.getElementById(`img${i}`);
    let captionText = document.getElementById(`caption${i}`);
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[i];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
}