let input = document.getElementById('inp1')
let output = document.getElementById('output')

function postBtn() {
    let inputValue = input.value.trim()
     output.innerHTML += `<div class="inputValueDiv">${inputValue} <button onclick="deleteBtn()" class="deleteBtn">Delete</button></div>`;
     if (!inputValue) {
      //  output.innerHTML = `<p style="color: red; font-weight: bold;">Oops.....sorry....Can't post NothinG</p>`
     //      return
        alert('Oops.....sorry....Cannot post NothinG')
        return
    }
   
    console.log(inputValue);
   
   
        input.value = ''
     
}
   function deleteBtn(button) {
    button.parentElement.remove()
 }                    
