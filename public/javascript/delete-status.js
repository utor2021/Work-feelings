async function deleteFormHandler(event) {
    event.preventDefault();
    // debugger;
    // grab event.target.id, user get attribute
    console.log(event.target.id)
    const id = event.target.id;
    // var id = document.querySelector(".delete-post-btn");
    const response = await fetch(`/api/status/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/checkin/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
