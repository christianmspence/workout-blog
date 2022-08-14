// async function commentFormHandler(e) {
//     e.preventDefault()

//     const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim()
//     const post_id = window.location.toString().split('/')[window.location.toString().split('/').length-1]

//     if (comment_text) {
//         const res = await fetch('/api/comments', {
//             method: 'post',
//             body: JSON.stringify({
//                 post_id,
//                 comment_text
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })

//         if (res.ok) {
//             document.location.reload()
//         }else {
//             alert(res.statusText)
//         }
//     }
// }
const commentForm = document.querySelector('.comment-form')
const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim()
const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]

function commentFormHandler() {

    axios({
        method: 'post',
        url: '/api/comments',
        body: {
            comment_text,
            post_id
        },
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(res => document.location.reload(res))
        .catch(err => console.error(err));
}
commentForm.addEventListener('submit', commentFormHandler)