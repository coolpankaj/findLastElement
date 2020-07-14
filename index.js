function findLastElement(array) {
        if(Array.isArray(array)) {
            return array[array.length - 1]
        } else {
            return "TypeError: Input must be a array type"
        }
}

// const _findLastElement = findLastElement;
// export { _findLastElement as findLastElement };

module.exports.findLastElement = findLastElement;