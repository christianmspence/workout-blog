const newPostBtn = document.querySelector('.new-post-btn')
const newPostForm = document.querySelector('.post-form')
const hidePostBtn = document.querySelector('#cancel')

newPostBtn.addEventListener('click', () => {
    newPostForm.classList.remove('hide')
    newPostBtn.classList.add('hide')
})

hidePostBtn.addEventListener('click', () => {
    newPostForm.classList.add('hide')
    newPostBtn.classList.remove('hide')
})

async function newFormHandler(e) {
    e.preventDefault()

    const title = document.querySelector('input[name="title"]').value
    const post_text = document.querySelector('textarea[name="post-body"]').value

    const res = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            title,
            post_text
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

newPostForm.addEventListener('submit', newFormHandler)