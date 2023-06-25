let text = document.getElementById('text')
let btn = document.getElementById('btn')
let out = document.getElementById('out')
btn.onclick = f1
function f1 (){
    const mas = text.value.split(' ')
    console.log(mas)
    let str = mas.toString()
  let str2 = str.trim()
    console.log(str2.length)
    const res = text.value.split(' ').reduce((a, b) => (b.length > a.length) ? b : a)
    out.innerHTML ='Количество букв'+ str2.length + '<br>'+'Самое длинное слово'+ '<br>' +res + '<br>' 
}
