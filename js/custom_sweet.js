const btnSave = document.querySelector('#btnSave');
btnSave.addEventListener('click',()=>{
    const allInput =document.querySelectorAll('.inputvaildator');
    allInput.forEach((input)=>{
        if(input.value.length<1){
            alert('Error')
        }
    })
})

function showToast(){
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
        icon: 'error',
        title: 'Missing Fields'
      })      
}