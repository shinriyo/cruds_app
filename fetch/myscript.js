function createData() {
  const newSiteName = document.getElementById("siteName").value;
  const newSiteURL = document.getElementById("siteURL").value;

  if (newSiteName === "" || newSiteURL === "") return;

  const siteInfo = {
    name: newSiteName,
    url: newSiteURL,
  };

  fetch("http://localhost:3000/sites", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(siteInfo),
  })
    .then(() => {
      document.getElementById("siteName").value = "";
      document.getElementById("siteURL").value = "";
    })
    .catch(err => console.log(err));

  function readData() {
    const list = document.getElementById("dataList");
    list.innnerHTM = "";
  }
}
