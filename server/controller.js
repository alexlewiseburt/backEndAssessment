const entries = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A smooth long journey! Great expectations.",
      "An inch of time is an inch of gold!",
      "Any day above ground is a good day.",
      "Be careful or you could fall for some tricks today.",
      "Curiosity kills boredom. Nothing can kill curiosity.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getEntries: (req, res) => {
    res.status(200).json(entries);
  },

  createEntry: (req, res) => {
    const { text } = req.body;
    entries.push(text);

    res.status(200).send(text);
  },

  updateEntry: (req, res) => {
    const { index } = req.params;
    const { text } = req.body;
    entries[index] = text;

    res.status(200).send(text);
  },

  deleteEntry: (req, res) => {
    const { index } = req.params;
    const [text] = entries.splice(index, 1);

    res.status(200).send(text);
  },
};
