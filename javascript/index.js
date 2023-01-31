// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

let c = document.createElement("li")
c.innerText = 'Mashed potatoes are ready!'
d = document.querySelector('ol#mashedPotatoes')
console.log(d)

d.appendChild(c)

// Iteration 2 - using promises
// ...
steak.push('Steak is ready!')
obtainInstruction('steak',0)
  .then((p0) => {
    document.querySelector("#steak").innerHTML += `<li>${p0}</li>`
    return obtainInstruction('steak', 1);
  })
  // ... Your code here
  .then ((p1) => {
    document.querySelector("#steak").innerHTML += `<li>${p1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then ((p2) => {
    document.querySelector("#steak").innerHTML += `<li>${p2}</li>`
    return obtainInstruction('steak', 3);
  })
  .then ((p3) => {
    document.querySelector("#steak").innerHTML += `<li>${p3}</li>`
    return obtainInstruction('steak', 4);
  })
  .then ((p4) => {
    document.querySelector("#steak").innerHTML += `<li>${p4}</li>`
    return obtainInstruction('steak', 5);
  })
  .then ((p5) => {
    document.querySelector("#steak").innerHTML += `<li>${p5}</li>`
    return obtainInstruction('steak', 6);
  })
  .then ((p6) => {
    document.querySelector("#steak").innerHTML += `<li>${p6}</li>`
    return obtainInstruction('steak', 7);
  })
  .then ((p7) => {
    document.querySelector("#steak").innerHTML += `<li>${p7}</li>`
    return obtainInstruction('steak', 8);
  })
  .then ((p8) => {
    document.querySelector("#steak").innerHTML += `<li>${p8}</li>`
    document.getElementById('steakImg').removeAttribute('hidden')
    return obtainInstruction('steak', 9);
  })
// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...

// c = document.querySelector("#mashedPotatoes").innerHTML
// console.log(document.querySelector("#mashedPotatoes").innerHTML += `<li>what2<li>`)
// // console.log(c = document.querySelector("#mashedPotatoes").innerHTML += `<li>what</li>`)
