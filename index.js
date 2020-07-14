function findlastelement(array) {
        if(Array.isArray(array)) {
            return array[array.length - 1]
        } else {
            return "TypeError: Input must be a array type"
        }
}

// const _findlastelement = findlastelement;
// export { _findlastelement as findlastelement };

module.exports.findlastelement = findlastelement;