// for using setTimeout with promises
const { setTimeout} = require ('node:timers/promises');


// the resolvereject class that contains both the resolve and reject methods
class ResolveReject {
    resolvePromise() {
        return setTimeout(500, 'Message resolved after 500ms');
    }

    rejectPromise() {
        return setTimeout(500).then(() => {
            throw new Error('Message rejected after 500ms');
        });
    }
}
// creating an instance of the ResolveReject class
const service = new ResolveReject();

//calling the resolvePromise and rejectPromise methods and handling the results with .then() and .catch()
service.resolvePromise().then((message) => {
    console.log(message);
})

service.rejectPromise().catch((err) => {
    console.error(err.message);
});