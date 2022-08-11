async function editFormHandler(e) {
    e.preventDefault()

    const title = document.querySelector('input[name="post-title"]').value.trim()
    const post_text = document.querySelector('textarea[name="post-body"]').value.trim()
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]

    const res = await fetch(`/api/posts/${id}`, {
        method: 'put',
        body: JSON.stringify({
            title,
            post_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (res.ok) {
        document.location.replace('/profile')
    }else {
        alert(res.statusText)
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler)