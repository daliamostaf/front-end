
const buttonsContainer = document.querySelector(".buttons");
const contentContainer = document.querySelector(".content");

// Fetch user data from the provided URL
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        data.forEach((user) => {
            const button = document.createElement("button");
        
            button.textContent = user.username;

            button.addEventListener("click", () => {
    
                contentContainer.textContent = ` ${user.username}`;

            
                posts(user.id);
            });
 
            buttonsContainer.appendChild(button);
        });
    })
    .catch((error) => {
        console.error("Error fetching user data:", error);
    });

async function posts(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const posts = await response.json();
        const postTitles = posts.map((post) => post.title);
        contentContainer.innerHTML += `${postTitles.join('<br>')}`;
    } catch (error) {
        console.error("Error fetching user posts:", error);
    }
}