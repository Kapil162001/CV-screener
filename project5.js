console.log("PROJECT 5");
// Data is an an array of objects which containes information about the candidates
const data = [
  {
    name: "Jhon",
    age: "20",
    city: "USA",
    language: "Web Dev",
    framework: "MERN",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    name: "Sunil",
    age: "25",
    city: "UK",
    language: "C++",
    framework: "...",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Dam",
    age: "24",
    city: "AUS",
    language: "Python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    name: "Harry",
    age: "28",
    city: "India",
    language: "JS",
    framework: "ReactJs",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

//cv Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}
const candidates = cvIterator(data);
nextCV();

// button listener for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV(e) {
  const currentCandidates = candidates.next().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentCandidates != undefined) {
    image.innerHTML = `<img src='${currentCandidates.image}'>`;
    profile.innerHTML = `<ul class="list-group">
  
  <li class="list-group-item">${currentCandidates.name}</li>
  <li class="list-group-item">${currentCandidates.age} year old.</li>
  <li class="list-group-item">Lives in ${currentCandidates.city}</li>
  <li class="list-group-item">Primarily works on ${currentCandidates.language}</li>
  <li class="list-group-item">Uses ${currentCandidates.framework} framework</li>
  
</ul>`;
  } else {
    alert("End of candidate application");
    window.location.reload();
  }
}
