
async function newFormHandler(event) {
    event.preventDefault();
    let emoji;
    console.log('event', event)
    $(function () {
        $(".selectable").selectable({
            selected: function (event, ui) {

                $(".selectable img").each(function (index) {
                    if ($(this).hasClass("ui-selected")) {
                        emoji = $(this).attr("id");
                    }
                });
            }
        });
    });

    const diary = document.querySelector('textarea[name="diary"]').value.trim();
    // const post_url = document.querySelector('input[name="post-url"]').value;
console.log('emoji', emoji)
    const response = await fetch(`/api/status`, {
        method: 'POST',
        body: JSON.stringify({
            emoji,
            diary,
            user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
