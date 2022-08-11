const upvoteBtn = document.querySelector('.upvote-btn')

async function upvoteClickHandler(e) {
    e.preventDefault()

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]

    const res = await fetch('/api/posts/upvote', {
        method: 'put',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (res.ok) {
        document.location.reload()
    }else {
        alert(res.statusText)
    }
}

upvoteBtn.addEventListener('click', upvoteClickHandler)