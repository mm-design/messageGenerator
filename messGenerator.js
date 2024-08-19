const messagesStore = [
    '"We cannot solve problems with the kind of thinking we employed when we came up with them". —Albert Einstein',
    '"Learn as if you will live forever, live like you will die tomorrow.” —Mahatma Gandhi',
    '"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” —Mark Twain',
    '"When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.” —Eleanor Roosevelt'
];

const generateMessage = () => {
    const randomNum = Math.floor(Math.random() * messagesStore.length);
    return messagesStore[randomNum];
}

console.log(generateMessage());