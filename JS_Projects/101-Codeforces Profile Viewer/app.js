const searchInputEl = document.getElementById("searchInput");
const profileBox = document.getElementById("profileBox");
const loading = document.getElementById("loading");

const profileGenerator = (profile) => {
    let nameee=`${profile.result[0].firstName}`;
    nameee+=` `;
    nameee+=`${profile.result[0].lastName}`;
    return `<div class="inner_profile">
        <div class="profile_header">
            <div class="header_info">
                <div class="profile_image">
                    <img src="${profile.result[0].titlePhoto}" alt="">
                </div>
                <div class="profile_info">
                    <h2>${nameee} </h2>
                    <p class="username">@${profile.result[0].handle}</p>
                </div>
            </div>
            <div class="profile_link">
                <a href="https://codeforces.com/profile/${profile.result[0].handle}" target="_blank">Profile</a>
            </div>
        </div>
        <main>
            <div class="bio">${profile.result[0].country}</div>
            <div class="more_profile_info">
                <div>
                    <h3>${profile.result[0].friendOfCount}</h3>
                    <h3>Friends</h3>
                </div>
                <div>
                    <h3>${profile.result[0].rank}</h3>
                    <h3>Rank</h3>
                </div>
                <div>
                    <h3>${profile.result[0].rating}</h3>
                    <h3>Rating</h3>
                </div>
            </div>
            <div id="popular_repos">
                
            </div>
        </main>
    </div>`;
};

// Fetch user Profile from GitHub
const fetchProfile = async (event) => {
    const username = searchInputEl.value;
    if (event.key === "Enter") {
        try {
            loading.innerText = "Loading...";
            loading.style.color = "#efefef";
            const res = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
            const data = await res.json();

            if (data.status=="OK") {
                profileBox.innerHTML = profileGenerator(data);
                // getRepositories(username);
                getPopularRepositories(username)
                    .then((repositories) => {
                        const reposEl =
                            document.querySelector("#popular_repos");
                        repositories.forEach((repository, index) => {
                            const elem = document.createElement("a");
                            elem.classList.add("repo");
                            elem.href = repository.html_url;
                            elem.innerHTML = repository.name;

                            reposEl.appendChild(elem);
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                loading.innerHTML = data.message;
                loading.style.color = "red";
                loading.style.marginTop = "60px";
                profileBox.innerHTML = "";
            }
        } catch (error) {
            console.log({ error });
        }
            loading.innerText = "";
    searchInputEl.value="";
    }
};


// Usage

searchInputEl.addEventListener("keypress", fetchProfile);
// END