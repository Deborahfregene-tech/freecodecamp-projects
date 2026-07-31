const lunches = [];
function addLunchToEnd(array , item) {
array.push(item);
console.log(`${item} added to the end of the lunch menu.`);
return array;
}

function addLunchToStart(array, item) {
  array.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
const removedItem = array.pop();
if (removedItem) {
  console.log(`${removedItem} removed from the end of the lunch menu.`);
} else {
  console.log("No lunches to remove.");
}
return array;
}

function removeFirstLunch(array) {
  const removedItem = array.shift();
  if (removedItem) {
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return array;
}

function getRandomLunch(array) {
 if (array.length === 0) {
  console.log("No lunches available.");
  return;
 }
const randomIndex = Math.floor(Math.random() * array.length);
  const selectedLunch = array[randomIndex];


  console.log(`Randomly selected lunch: ${selectedLunch}`);

  return selectedLunch;
}

function showLunchMenu(array) {
 if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${array.join(", ")}`)
  }
}
