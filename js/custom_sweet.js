// access the button

const btnSave = document.querySelector("#btnSave")

btnSave.addEventListener ("click",async(e)=>{
    e.preventDefault()
    //    get all input tags
    // change the document to an array to be able to use filter instead of forEach
    let allInputs = document.querySelectorAll(".inputValidator")
    allInputs = Array.from(allInputs)
    const result = allInputs.filter((input)=>{
        if(input.value.length<1){
            showToast("error","field required")
            return false
        }
        return true 
    })
   console.log(result);

   if(result.length>2){
    const first_name = document.querySelector("#first_name").value
    const last_name = document.querySelector("#last_name").value
    const age = document.querySelector("#age").value

    const res = await axios.post("/register", {first_name,last_name,age}) .then(response => {
      // Assuming a successful response from the server
      window.location.href = '/'; // Redirect to the desired page
    })
    .catch(error => {
      console.error('Error:', error);
    });
   }  
  
})

const btnEdits = document.querySelectorAll('.btnEdit')
btnEdits.forEach((btnEdit)=>{
  // console.log(btnEdit.parentNode.parentNode.parentNode);
    btnEdit.addEventListener('click', (e)=>{
      const tr = e.srcElement.parentNode.parentNode.parentNode;
      // const a = document.querySelector(tr);
      console.log(tr.children[1]);

      // create variables

      const tds = tr.children;
      const first_name = tds[1].textContent;
      const last_name = tds[2].textContent;
      const age = tds[3].textContent;

      // access individual inputs in the modal
      document.querySelector('#first_name').value = first_name
      document.querySelector('#last_name').value = last_name
      document.querySelector('#age').value = age
      // set the values 
      

      // show modal
      document.querySelector('#exampleModal').className = 'modal fade show'
    
    })
})

function showToast(status,msg){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: status,
        title: msg
      })
}