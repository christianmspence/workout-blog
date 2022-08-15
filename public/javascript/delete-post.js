const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]
function deleteComment() {
    axios
        .delete(`/api/posts/${id}`)
        .then(res => document.location.replace('/profile')(res))
        .catch(err => console.error(err));
}




document.querySelector('.delete-post-btn').addEventListener('click', deleteComment)