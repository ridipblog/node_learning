const express = require('express');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const app = express();
passport.use(new googleStrategy({
    clientID: "784573559341-mm6nd9pmtd41f8t9l0j9vpqgjuh65q3j.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToekn, profile, done) => {
    console.log(accessToken);
    console.log(refreshToekn);
    console.log(profile);
}));

app.get('/', (req, res) => {
    res.send("Ok")
});
app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
app.get('/auth/google/callback', passport.authenticate("google"));
// const clientID = "784573559341-mm6nd9pmtd41f8t9l0j9vpqgjuh65q3j.apps.googleusercontent.com";
// const clientSecret = "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";
// const callbackURL = "/auth/google/callback";
app.listen(3000);