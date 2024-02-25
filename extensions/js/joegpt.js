class JoeGPTExtension {
  constructor() {
    this.maxTimes = 10;
  }

  getInfo() {
    return {
      id: 'joeGPT',
      name: 'JoeGPT',
      blocks: [
        {
          opcode: 'askJoeGPT',
          blockType: Scratch.BlockType.REPORTER,
          text: 'ask JoeGPT [UNUSED]',
          arguments: {
            UNUSED: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },
        {
          opcode: 'setMaxTimes',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set max times to [MAX]',
          arguments: {
            MAX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'getMaxTimes',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current max times'
        }
      ],
      color1: '#4C97FF',
      color2: '#3373CC',
      color3: '#2E42A5'
    };
  }

  askJoeGPT() {
    const times = Math.floor(Math.random() * this.maxTimes) + 1;
    let result = '';

    for (let i = 0; i < times; i++) {
      if (Math.random() < 0.1) {
        result += 'Manoik ';
      } else {
        result += 'Joe ';
      }
    }

    return result.trim();
  }

  setMaxTimes(args) {
    this.maxTimes = Math.max(1, args.MAX);
  }

  getMaxTimes() {
    return this.maxTimes;
  }
}

Scratch.extensions.register(new JoeGPTExtension());
