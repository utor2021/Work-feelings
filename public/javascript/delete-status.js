async function deleteFormHandler(event) {
    event.preventDefault();

    const id = event.target.id;
    const response = await fetch(`/api/status/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/checkin/dashboard');
    } else {
        alert(response.statusText);
    }
}

let deletePosts = document.querySelectorAll(".delete-post-btn")

for (let i = 0; i < deletePosts.length; i++) {
    deletePosts[i].addEventListener("click", deleteFormHandler);
}