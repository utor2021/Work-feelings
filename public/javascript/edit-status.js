async function editFormHandler(event) {

    console.log(event.target);
    const id = event.target.id;
    const diaryEl = document.querySelector("#diary" + id).value;
    let parent = event.target.closest("div.border");
    console.log(parent);
    // Get the selected emoji inside the same parent div
    let emojiElement = parent.querySelector(".ui-selected");
    // read the id of the emoji element
    let emoji = emojiElement.id;

    const response = await fetch(`/api/status/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            diary: diaryEl,
            emoji: emoji
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

function editEmojiHandler(event) {
    const emojiParent = event.target.parentElement;
    var emojiOptions = emojiParent.nextElementSibling;
    emojiOptions.removeAttribute("hidden");

    let emoji;
    $(function () {
        $(".selectable").selectable({
        });
    });
}

let emojiPosts = document.querySelectorAll(".edit-post-form")

for (let i = 0; i < emojiPosts.length; i++) {
    emojiPosts[i].addEventListener("click", editFormHandler);
}

let emojiPacks = document.querySelectorAll(".edit-emoji-selection");

for (let i = 0; i < emojiPacks.length; i++) {
    emojiPacks[i].addEventListener("click", editEmojiHandler);
}