(function() {
    emailjs.init({
        publicKey: 'W5s4ZhmQeke8bdpI8'
    });
})();

const contact =document.getElementById('contact-form')

contact.addEventListener('submit', (e)=>{
e.preventDefault()
const mess_sent= document.getElementById('mess_sent')
const btn= document.getElementById('btn')
const my_name = document.getElementById('name').value.trim()
const name_err=document.getElementById('name_err')
const email =document.getElementById('email').value.trim()
const email_err=document.getElementById('email_err')
const message =document.getElementById('message').value.trim()
const mess_err=document.getElementById('mess_err')
const subject =document.getElementById('subject').value.trim()
const sub_err=document.getElementById('sub_err')
 let email_check=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    let pattern  = /^[A-Za-z]+(\s[A-Za-z]+)+$/
let isValid=true
if(my_name===''||my_name==null){
    name_err.textContent='must write name'
    isValid=false
}else if (!my_name.match(pattern)){
    name_err.textContent='must write two name'
    isValid=false
}else{
    name_err.textContent=''
}if(email===''){
    email_err.textContent='must write email'
    isValid=false
}else if(!email.match(email_check)){
    email_err.textContent='wrong email'
    isValid=false
}else{
    email_err.textContent=''
}if(subject===''){
    sub_err.textContent='must write reson'
    isValid=false
  
}  else{
        sub_err.textContent=''
    }if(message===''){
    mess_err.textContent='must write message'
    isValid=false
}else{
    mess_err.textContent=''
}if(!isValid){
    return
}
btn.textContent='sending...'
    mess_sent.textContent='sending message'

    emailjs.sendForm(
        'service_46bzr3j',
        'template_9vj92u8',
        contact
       
    )
    .then(()=>{
        alert('message sent succesfully')
        btn.textContent='send'
        mess_sent.textContent=''
         contact.reset()
        })
        .catch(()=>{
            aler('failed to send message')
        })
})

