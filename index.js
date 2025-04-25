import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://leads-tracker-app-75ea0-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById('delete-btn')
const leadsList = document.getElementById('leads-list')

onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if(snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        const myLeads = Object.values(snapshotValues)
        renderItems(myLeads)
    }
})

function renderItems(stored) {
    if(stored) {
        let listItems = ''
        for(let i=0; i < stored.length; i++) {
            let newLink = `<a href="${stored[i]}" target="_blank">${stored[i]}</a>`
            listItems += "<li>" + newLink + "</li>"
        }
        leadsList.innerHTML = listItems
    } return
}

function addLead() {
    if (!inputEl.value) {
        alert('Field is empty!')
        return
    }
    push(referenceInDB, inputEl.value)
    inputEl.value = ''
}

function clearLeads() {
    if(referenceInDB) {
        if(confirm('Do you want to delete all leads?')) {
            remove(referenceInDB)
            leadsList.innerHTML = null
        } return
    } return
}

inputBtn.addEventListener('click', () => addLead());
deleteBtn.addEventListener('click', () => clearLeads());
