const nameRequired = (name) => !!name || 'Name is required';
const nameLength = (name) => name.length <= 20 || 'Name must be less than 20 characters';

const emailRequired = (email) => !!email || 'E-Mail is required';
const emailIsValid = (email) => email.includes('@') || 'E-Mail is not valid';

const favouriteWordsRequired = (words) => words.length > 0 || 'Favourite words must be selected';

export {
    nameRequired,
    nameLength,
    emailRequired,
    emailIsValid,
    favouriteWordsRequired,
};