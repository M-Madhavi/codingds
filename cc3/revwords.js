const revwords = (sentence) =>{
    const words = sentence.split(" ")
    console.log(words)
    const revword = words.reverse()
    console.log(revword)
    return revword.join(" ")

}
console.log(revwords("this is javascript"))