const filterInappropriateContent = (message) => {
    const inappropriateWords = ['offensive_word1', 'offensive_word2', 'offensive_word3'];
    
    if (inappropriateWords.some(word => message.content.toLowerCase().includes(word))) {
        // Action to take when inappropriate content is detected
        message.delete();
        message.channel.send(`${message.author}, please refrain from using inappropriate language.`);
    }
};

module.exports = {
    filterInappropriateContent
};