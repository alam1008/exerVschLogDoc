document.body.style.backgroundColor = "darkCyan"
document.body.style.textAlign= "center"

var header = document.getElementById("header")
header.style.color = "orange"

document.getElementById("header").addEventListener("dblclick", function(){
    header.style.color="purple"
})
document.getElementById("header").addEventListener('click', function(){
    header.style.color="orange"
})
var button = document.getElementById("button")

document.getElementById("button")

function handleButtonClick() {
    console.log("Someone needs help!")
}

button.addEventListener("click", handleButtonClick)

var theGang= [
    {name: "Scooby-Doo", type: "dog"},
    {name: "Shaggy Rogers", type: "man"},
    {name: "Fred Rogers", type: "man"},
    {name: "Daphne Blake", type: "woman"},
    {name: "Velma Dinkley", type: "woman"}
]

var members = document.getElementById("members")
members.style.color = "purple"
members.style.textAlign = "center"

var memberList = document.getElementById("memberList")
memberList.style.color = "orange"
memberList.style.textAlign = "center"
memberList.style.listStylePosition = "inside"

console.log(document)