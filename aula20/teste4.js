function fat(n) {
    var fat = 1
    for (var c=n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fat(5))