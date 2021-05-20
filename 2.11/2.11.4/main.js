function setLocalStorage() {
  localStorage.setItem("localList", JSON.stringify(recipes));
}

//^this is the function to save something in local storage

function getLocalStorage() {
  let list = JSON.parse(localStorage.getItem("localList"));
  console.log(list);
  if (list != null) {
    //^this says, if list is different from null...
    return list;
  } else {
    return (list = []);
    //^this says, if not, return an empty array. this way it never returns null, which would produce an error
  }
}
