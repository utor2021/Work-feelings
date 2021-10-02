async function editFormHandler(event) {
    // event.preventDefault();

    // const title = document.querySelector('input[name="post-title"]').value.trim();
    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];
    console.log(event.target);
    const id = event.target.id;
    const diaryEl = document.querySelector("#diary" + id).value;
    console.log(diaryEl);
    const response = await fetch(`/api/status/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            diary: diaryEl
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response);
    if (response.ok) {
        document.location.replace('/checkin/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('click', editFormHandler);
