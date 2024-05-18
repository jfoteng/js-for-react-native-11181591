// userInfo.js

// Function to create user profiles
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        return"Both arrays must have the same length";
    }

    return originalNames.map((name, index) => ({
        originalName: name,
        modifiedName: modifiedNames[index],
        id: index + 1
    }));
}

// Use case
const originalNames = ["Brew", "Charis", "Lawrence", "Mary", "Rose"];
const modifiedNames = ["BREW", "charis", "LAWRENCE", "mary", "ROSE"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

/*
output:
[
  { originalName: 'Brew', modifiedName: 'BREW', id: 1 },
  { originalName: 'Charis', modifiedName: 'charis', id: 2 },
  { originalName: 'Lawrence', modifiedName: 'LAWRENCE', id: 3 },
  { originalName: 'Mary', modifiedName: 'mary', id: 4 },
  { originalName: 'Rose', modifiedName: 'ROSE', id: 5 }
]
*/