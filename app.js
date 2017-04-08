const ls=localStorage
show()
function show(){
	for (let i = 0; i < ls.length; i++) {
  let key = ls.key(i)
  let data = JSON.parse(ls.getItem(key))
  if (data != null) {
const label1=document.createElement("label")
label1.textContent="Recipe name"
const recipeshow=document.createElement("h3")
recipeshow.textContent=data.name
const label2=document.createElement("label")
label2.textContent="Ingredients"
const ingrishow=document.createElement("p")
ingrishow.textContent=data.ingredient
const label3=document.createElement("label")
label3.textContent="directions"
const dirshow=document.createElement("p")
dirshow.textContent=data.directions
const label4=document.createElement("label")
label4.textContent="Image"
const image=document.createElement('img')
image.src=data.path
const innerdiv=document.getElementById('innercontainer')
innerdiv.appendChild(label1)
innerdiv.appendChild(recipeshow)
innerdiv.appendChild(label2)
innerdiv.appendChild(ingrishow)
innerdiv.appendChild(label3)
innerdiv.appendChild(dirshow)
innerdiv.appendChild(label4)
innerdiv.appendChild(image)
  }
}
}
let button=document.getElementById('btn')
button.addEventListener('click',adddata)

function adddata(){
const recipe_name=document.getElementById('name').value
const ingre=document.getElementById('ingridents').value
const direct=document.getElementById('directions').value
const photo=document.getElementById('img').value
let data = {
    'name': recipe_name,
    'ingredient': ingre,
    'directions':direct,
    'path':photo
  }
storedata(data)
const label1=document.createElement("label")
label1.textContent="Recipe name"
const recipeshow=document.createElement("h3")
recipeshow.textContent=recipe_name
const label2=document.createElement("label")
label2.textContent="Ingredients"
const ingrishow=document.createElement("p")
ingrishow.textContent=ingre
const label3=document.createElement("label")
label3.textContent="directions"
const dirshow=document.createElement("p")
dirshow.textContent=direct
const label4=document.createElement("label")
label4.textContent="Image"
const image=document.createElement('img')
image.src=photo
const innerdiv=document.getElementById('innercontainer')
innerdiv.appendChild(label1)
innerdiv.appendChild(recipeshow)
innerdiv.appendChild(label2)
innerdiv.appendChild(ingrishow)
innerdiv.appendChild(label3)
innerdiv.appendChild(dirshow)
innerdiv.appendChild(label4)
innerdiv.appendChild(image)
document.getElementById('name').value=""
document.getElementById('ingridents').value=""
document.getElementById('directions').value=""
document.getElementById('img').value=""
}

function storedata(value) {
  let key = ls.length
  key=key+1
  ls.setItem(key, JSON.stringify(value))
  return
}

const srchbtn=document.getElementById('srchbtn')
srchbtn.addEventListener('click',search)

function search(){
	const name=document.getElementById('search').value
	const div1=document.getElementById('upper')
	for (let i = 0; i < ls.length; i++) {
  let key = ls.key(i)
  let data = JSON.parse(ls.getItem(key))
  if (data != null) {
  	if(name==data.name){
     const label1=document.createElement("label")
label1.textContent="Recipe name"
const recipeshow=document.createElement("h3")
recipeshow.textContent=data.name
const label2=document.createElement("label")
label2.textContent="Ingredients"
const ingrishow=document.createElement("p")
ingrishow.textContent=data.ingredient
const label3=document.createElement("label")
label3.textContent="directions"
const dirshow=document.createElement("p")
dirshow.textContent=data.directions
const label4=document.createElement("label")
label4.textContent="Image"
const image=document.createElement('img')
image.src=data.path
div1.appendChild(label1)
div1.appendChild(recipeshow)
div1.appendChild(label2)
div1.appendChild(ingrishow)
div1.appendChild(label3)
div1.appendChild(dirshow)
div1.appendChild(label4)
div1.appendChild(image)
return

  	}
       
  }
  else{
  	const errormsg=document.createElement("h3")
  	errormsg.textContent="No recipes found"
    div1.appendChild(errormsg)
    return
}
  	}
  	const errormsg=document.createElement("h3")
  	errormsg.textContent="No recipes found"
    div1.appendChild(errormsg)
}



