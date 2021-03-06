module.exports = class extends Command {
  constructor (...options) {
    super(...options, {
      name        : 'big-text',
      aliases     : [
        'big-text',
        'big',
      ],
      description : 'See your text in big emojis.',
      args        : [
        {
          key      : 'text',
          required : true,
        },
      ],
    });
  }

  run (msg, { text }) {
    const big = [
      ...text,
    ]
      .map(char => {
        if (!Utils.emojis[char.toLowerCase()]) {
          return char;
        }
        else return Utils.emojis[char.toLowerCase()];
      })
      .join(String.fromCharCode(8203));
    msg.channel.send(big);
  }
};
