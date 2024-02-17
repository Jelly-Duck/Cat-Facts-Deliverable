const catFactsUrl = "https://catfact.ninja/fact";

async function fetchCatFacts() {
  try {
    const response = await fetch(catFactsUrl);
    if (!response.ok) {
      throw new Error("Error");
    }
    const catData = await response.json();
    console.log("Fact recieved:", catData);
    return catData;
  } catch (err) {
    console.err("Fetch Error:", err);
  }
}

fetchCatFacts();

module.exports = {
  fetchCatFacts,
};
