document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#add-pet").addEventListener('submit', (e) => {
        e.preventDefault()
        const options = {
            method: "POST", 
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                pet_name: document.querySelector("#add-pet")[1].value,
                species: document.querySelector("#add-pet")[2].value, 
                user_id: parseInt(document.querySelector("#add-pet")[0].value),
                age: parseInt(document.querySelector("#add-pet")[3].value)              
            })
        }
        fetch('/pets', options).then(json => {
            const user_id = parseInt(document.querySelector("#add-pet")[0].value)
            window.location.href = `/users/${user_id}`
        })
    })
})
