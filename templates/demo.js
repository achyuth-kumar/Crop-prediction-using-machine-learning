const place=document.getElementById('place')
const rainfall=document.getElementById('rainfall')
const ph=document.getElementById('ph')
const form=document.getElementById('form')
const errorElement=document.getElementById('error')
form.addEventListener('submit',(e) => {
    let messages=[]
    if(place.value.length>=10) {
        messages.push("Place must have less than 10 characters")
    }
    if(rainfall.value<=170 || rainfall.value>=280) {
        messages.push("Enter valid rainfall values")
    }
    if(ph.value<=0 || ph.value>=14) {
        messages.push("Enter valid ph values")
    }
    if(messages.length>0) {
        e.preventDefault()
        errorElement.innerText=messages.join(',')
    }
    
})