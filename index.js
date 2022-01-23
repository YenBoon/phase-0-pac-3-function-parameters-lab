function introduction(name) {
    return(`Hi, my name is ${name}.`);
}
introduction(`Ben`);

function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introduction(`Ben`, `Ember.js`);

function introductionWithLanguageOptional(name, language = `JavaScript`) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introduction(`Ben`, `ember.js`, language);