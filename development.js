// Firebase Admin
const admin = require("firebase-admin")
const serviceAccount = require("./serviceAccountKey.json")

// Initalize
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "cops-5b2b8.appspot.com",
})
const bucket = admin.storage().bucket()

// Upload JS
bucket.upload("dist/production.js", {
    gzip: true,
    destination: "elixir-customiser-ui-development/development.js",
    metadata: {
        cacheControl: "no-cache",
    },
})

// Upload CSS
bucket.upload("dist/production.css", {
    gzip: true,
    destination: "elixir-customiser-ui-development/development.css",
    metadata: {
        cacheControl: "no-cache",
    },
})

console.log("Development Files Uploaded")
