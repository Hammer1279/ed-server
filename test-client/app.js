const EDTracker = require("ed-tracker")
const tracker = new EDTracker
tracker.on('message',msg=>console.log(msg))
tracker.on('data',msg=>console.log(msg))
tracker.on('error',err=>console.error(err))
tracker.login("ED_TRACKER_TEST",'localhost')
// tracker.send("ping")