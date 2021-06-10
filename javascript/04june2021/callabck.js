/**
 * posts
 * 1) getPosts
 * 2) createPost
 */

 const posts = [
    { title: "Post 1", body: "This is first post" },
    {title:"Post 2", body:"This is second post"}
]

function getPosts() {
    setTimeout(() => {
        posts.forEach(post => console.log(post) )
    }, 2000)
}

// function createPost(post) {
//     setTimeout(() => {
//         posts.push(post)
//     }, 3000)
// }

// function createPost(post, callfunction) {
//     setTimeout(() => {
//         posts.push(post)
//       cal
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            err = true
            if (!err)
                resolve()
            else
                reject()
        },3000)
    } )
}
createPost({ title: "Post 3", body: "This is third post" })
    .then(getPosts)
    .catch(err => console.error("Error: can not publish the post"))