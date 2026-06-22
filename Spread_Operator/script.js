function createProfile(name, age, website){
    return {
        name: name,
        age: age,
        ...(website && { website: website})
    }
}

// Case 1: Website is provided (truthy)
const userWithWebsite = createProfile("perumal", 20, "Puvilink")
console.log("With Website: ", userWithWebsite)

// Case 2: Website is NOT Provided (udefined/falsy)
const userWithoutWebsite = createProfile("Giri", 30, undefined)
console.log("Without Website: ", userWithoutWebsite)