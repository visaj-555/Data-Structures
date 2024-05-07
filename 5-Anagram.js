// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const charCount = {};
    
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of t) {
        if (!charCount[char]) {
            return false; 
        }
        charCount[char]--;
    }
    
    for (let char in charCount) {
        if (charCount[char] !== 0) {
            return false;
        }
    }
    
    return true;
}