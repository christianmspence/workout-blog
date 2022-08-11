async function deleteFormHandler(e) {
    e.preventDefault()

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]

    const res = await fetch(`/api/posts/${id}`, {
        method: 'delete'
    })

    if (res.ok) {
        document.location.replace('/profile')
    }else {
        alert(res.statusText)
    }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler)