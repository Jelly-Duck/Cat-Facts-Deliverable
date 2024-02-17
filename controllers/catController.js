const catFactsUrl = "https://catfact.ninja";

async function fetchCatFact() {
  try {
    const response = await fetch(`${catFactsUrl}/fact`);
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

async function fetchCatFacts() {
  try {
    const response = await fetch(`${catFactsUrl}/facts`);
    if (!response.ok) {
      throw new Error("Error");
    }
    const catData = await response.json();
    console.log("Fact recieved:", catData.data);
    return catData.data;
  } catch (err) {
    console.err("Fetch Error:", err);
  }
}

// fetchCatFact();
fetchCatFacts();

module.exports = {
  fetchCatFact,
  fetchCatFacts,
};
