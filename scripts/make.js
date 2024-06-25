Hooks.once("ready", async () => {
  let journalURL = "https://raw.githubusercontent.com/laaruk/journal/main/cozdanie-personazha.json";
  let journalName = "🧙‍♂️⚔️ Cоздание персонажа";

  if (!game.journal.getName(journalName)) {
    async function createJournal() {
      const fetchPromise = fetch(journalURL);

      fetchPromise.then((response) => {
        const jsonPromise = response.json();
        jsonPromise.then((data) => {
          JournalEntry.create(data);
        });
      });
    }

    createJournal();
  }
});