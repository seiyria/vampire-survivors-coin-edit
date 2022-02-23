
// npm i level
const level = require('level')

// copy the DB from %AppData%\Roaming\Vampire_Survivors\Local Storage\leveldb or paste it alongside this script
const db = level('./leveldb')

// 2) Put a key & value
db.put('_file://\x00\x01CapacitorStorage.Coins', '\x0199999', function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  // 3) Fetch by key
  db.get('_file://\x00\x01CapacitorStorage.Coins', function (err, value) {
    if (err) return console.log('Ooops!', err) // likely the key was not found

    // Ta da!
    console.log('coins=' + value)
  })
})
