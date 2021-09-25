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

async function newFormHandler(event) {
    event.preventDefault();
    const diary = document.querySelector('textarea[name="diary"]').value.trim();
    // const post_url = document.querySelector('input[name="post-url"]').value;
    console.log('emoji', emoji, "diary",diary)
    const response = await fetch(`/api/status`, {
        method: 'POST',
        body: JSON.stringify({
            emoji,
            diary
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/checkin/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
