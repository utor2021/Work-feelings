async function editFormHandler(event) {

    console.log(event.target);
    const id = event.target.id;
    const diaryEl = document.querySelector("#diary" + id).value;
    const emojiEl = document.querySelector(".emoji-options").value;

    const response = await fetch(`/api/status/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            diary: diaryEl,
            emoji: emojiEl
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
    console.log(emojiOptions);
    emojiOptions.removeAttribute("hidden");

    var myFunction = function () {
        var selectableEmojis = this.getElementsByClassName("selectable");
        console.log('selectable emojis', selectableEmojis);
    };

    for (var i = 0; i < emojiOptions.length; i++) {
        emojiOptions[i].addEventListener('click', myFunction, false);
    }

    let emoji;
    $(function () {
        $(".selectable").selectable({
            selected: function () {
                $(".selectable img").each(function (index) {
                    if ($(this).hasClass("ui-selected")) {
                        emoji = $(this).attr("id");
                    }
                });
            }
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