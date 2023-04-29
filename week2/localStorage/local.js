/* -------- localStorage demo -------- */
localStorage.setItem("test", 1);
alert(localStorage.getItem("test"));

/* ------- Object-like access --------- */
/* Does not work with user-generated values. */
// set key
localStorage.test = 2;

// get key
alert( localStorage.test ); // 2

// remove key
delete localStorage.test;

