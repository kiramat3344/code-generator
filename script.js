function updaterange() {
    let range = document.getElementById('range')
    let para = document.getElementById('para')
        
        para.innerHTML = '';
        let value = range.value;
        console.log(value);

        let rangediv = document.createElement('div');
        rangediv.innerHTML = 'Length:${value}'
        para.appendChild(rangediv);
        return value
    
}
function grp(rangevalue){
    let password = '';
    let result = document.getElementById('result');
    let chars = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM())(*&^%$#@!'
    for(let i=0; i < rangevalue; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length));

    }
    result.value = password; 
}