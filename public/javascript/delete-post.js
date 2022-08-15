const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1]
function deletePost() {
    axios
        .delete(`/api/posts/${id}`)
        .then(res => document.location.replace('/profile')(res))
        .catch(err => console.error(err));
}

document.querySelector('.delete-post-btn').addEventListener('click', deletePost)