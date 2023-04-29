//CREATING AN ELEMENT
//Creates a new element node with the given tag:
let div = document.createElement("div");

//Creates a new text node with the given text:
let textNode = document.createTextNode("Here I am");

//CREATING THE MESSAGE
// 1. Create <div> element
let div2 = document.createElement("div");

// 2. Set its class to "alert"
div2.className = "alert";

// 3. Fill it with the content
div2.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

//INSERTION METHODS
//To make the div show up, we need to insert it somewhere into document.
document.body.append(div2);

/* ---------------------- A2 --------------- */
// insert string "before" before <ol>
ol.before("before");

// insert string "after" after <ol>
ol.after("after");

// insert liFirst at the beginning of <ol>
let liFirst = document.createElement("li");
liFirst.innerHTML = "prepend";
ol.prepend(liFirst);

// insert liLast at the end of <ol>
let liLast = document.createElement("li");
liLast.innerHTML = "append";
ol.append(liLast);

/* -------------- insertAdjacentHTML/Text/Element -------- */
/* Another way to show the alert message */
document.body.insertAdjacentHTML("afterbegin", `<div class="alert"><strong>Hi there!</strong> You've read an important message.</div>`);

/* NODE REMOVAL */
setTimeout(() => div2.remove(), 1000);


/* ------------ Cloning nodes: cloneNode ------------ */
// clone the message
let divClone = div2.cloneNode(true);

// change the clone
divClone.querySelector("strong").innerHTML = "Bye there!";

// show the clone after the existing div
div2.after(divClone);

/* ---------- DocumentFragment --------- */
/* getListContent below generates a fragment with <li> items, that are later inserted into <ul> */
function getListContent() {
    let fragment = new DocumentFragment();

    for (let i = 1; i <= 3; i++) {
        let li = document.createElement("li");
        li.append(i);
        fragment.append(li);
    }

    return fragment;
}

ul.append(getListContent());

/* Alternative way to do the same using an array of nodes */
function getListContentArray() {
    let result = [];
    for (let i = 1; i <= 3; i++) {
        let li = document.createElement("li");
        li.append(i);
        result.push(li);
    }

    return result;
}

/* The spread operator ... is used to spread the elements returned 
by getListContent() as individual arguments to the append() function. */
ul.append(...getListContentArray());


