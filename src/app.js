// Details
//===================
const tbody = document.getElementById('tbody')
const form = document.getElementById('form')
let id = 4

// Delete Row form table
//=================================================
// ;[...tbody.children].forEach(tr => {
//     let dlt = tr.querySelectorAll('.delete');
//     dlt.forEach(dltButton => {
//         dltButton.addEventListener('click', function(){
//             tr.remove()
//         })
//     });
// })
tbody.addEventListener('mouseover', function () {
    ;[...tbody.children].forEach(tr => {
        let dlt = tr.querySelectorAll('.delete');
        dlt.forEach(dltButton => {
            dltButton.addEventListener('click', function () {
                tr.remove()
            })
        });
    })
})
// Collect Data from Form & add to row
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let formData = {
        id: id++
    }
        ;[...form.elements].forEach(el => {
            if (el.type !== 'submit') {
                formData[el.name] = el.value
            }
        })
    createRow(formData.id, formData.Name, formData.Email, formData.Email, formData.Class)
})
// Create record (Row)
function createRow() {
    let tr = document.createElement('tr')
    let th = document.createElement('th')
    th.innerHTML = arguments[0]
    tr.insertAdjacentElement('afterbegin', th)
    for (let i = 1; i < arguments.length; i++) {
        let td = document.createElement('td')
        td.innerHTML = arguments[i]
        tr.appendChild(td)
    }
    // Action table data
    let actionTd = document.createElement('td')
    let dlt = document.createElement('span')
    dlt.classList = 'badge delete text-bg-danger'
    dlt.innerHTML = 'Delete'
    actionTd.appendChild(dlt)
    let edit = document.createElement('span')
    edit.classList = 'badge edit text-bg-primary'
    edit.innerHTML = 'Edit'
    actionTd.appendChild(edit)

    tr.insertAdjacentElement('beforeend', actionTd)
    tbody.insertAdjacentElement('beforeend', tr)
}