const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const entriesDropDown = document.getElementById("entriesDropDown");
const addEntryButton = document.getElementById("addEntryButton");
const editEntryButton = document.getElementById("editEntryButton");
const deleteEntryButton = document.getElementById("deleteEntryButton");
const entryTextInput = document.getElementById("entryTextInput");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};
const refreshEntriesDropDown = () => {
  axios.get("http://localhost:4000/api/entries/").then((res) => {
    const entries = res.data;
    entriesDropDown.innerHTML = "";
    entries.forEach((entry, index) => {
      entriesDropDown.add(new Option(entry, index));
    });
  });
};
const addEntry = () => {
  const text = entryTextInput.value;
  entryTextInput.value = "";
  axios
    .post("http://localhost:4000/api/entries/", {
      text,
    })
    .then((res) => {
      refreshEntriesDropDown();
    });
};
const editEntry = () => {
  const text = entryTextInput.value;
  const index = entriesDropDown.selectedIndex;
  entryTextInput.value = "";
  axios
    .put(`http://localhost:4000/api/entries/${index}`, {
      text,
    })
    .then((res) => {
      refreshEntriesDropDown();
    });
};
const deleteEntry = () => {
  const index = entriesDropDown.selectedIndex;
  axios.delete(`http://localhost:4000/api/entries/${index}`).then((res) => {
    refreshEntriesDropDown();
  });
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
addEntryButton.addEventListener("click", addEntry);
editEntryButton.addEventListener("click", editEntry);
deleteEntryButton.addEventListener("click", deleteEntry);

refreshEntriesDropDown();
