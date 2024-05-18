

function createNode(tagname, className, textContent, parent) {
  const element = document.createElement(tagname)
  element.setAttribute('class', className);
  element.textContent = textContent

  parent.appendChild(element)
  return element
}

function createListItem(text, value, parent) {
  const listText = createNode('div', 'panel-list__text', '', parent);
  createNode('span', 'panel-list__title', text, listText);
  createNode('span', 'panel-list__line', '', listText);
  createNode('span', 'panel-list__value', value, listText);

  parent.appendChild(listText)

  return listText

}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    generateUsers(json);

  });
function generateUsers(users) {
  const userList = document.querySelector(".user-list");
  for (let user of users) {
    const userLi = createNode('li', 'panel-list__item', '', userList);
    createListItem('Name:', user.name, userLi);
    createListItem('Email:', user.email, userLi);
    createListItem('Username:', user.username, userLi);
    createListItem('Company:', user.company.name, userLi);

    const userButton = createNode('button', 'panel-list__button', 'Get posts', userLi)


    userButton.addEventListener("click", function () {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          generatePosts(json);

        });
    });
  }
}
// Ikkinchi ustin generatePosts
function generatePosts(posts) {
  const postList = document.querySelector('.post-list')
  for (let post of posts) {
    const postLi = createNode('li', 'panel-list__item', '', postList);
    createListItem('title:', post.title, postLi);
    createListItem('Body:', post.body, postLi);

    const postButton = createNode("button", 'panel-list__button', 'Get comments', postLi);
    //  Button bosilganda uchinchi ustin ishga tushadi
    postButton.addEventListener("click", function () {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          generateComments(json);

        });
    })

  }
}
// Comments 
function generateComments(comments) {
  const userList = document.querySelector(".comment-list")
  for (let comment of comments) {
    const userLi = createNode('li', 'panel-list__item', '', userList);
    createListItem('Name:', comment.name, userLi);
    createListItem('Body:', comment.body, userLi);



  }
}