import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

// --------------------------------------------------------------
// --------------------------------------------------------------
// // child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// })

// // database
// //   .ref('expenses')
// //   .once('value')
// //   .then(snapshot => {
// //     const expenses = []

// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     })
// //     console.log(expenses)
// //   })

// // database.ref('expenses').on('value', snapshot => {
// //   const expenses = []

// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   })
// //   console.log(expenses)
// // })

// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: '',
// //   amount: 109500,
// //   createdAt: 4546516452
// // })

// // database.ref('notes/-LaQr7Ih69LbylVxodIY').remove()

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular'
// // })

// // const onValueChange = database.ref().on(
// //   'value',
// //   snapshot => {
// //     const name = snapshot.val().name
// //     const job = snapshot.val().job.title
// //     const company = snapshot.val().job.company
// //     const forPrint = `${name} is a ${job} at ${company}`
// //     console.log(forPrint)
// //   },
// //   e => {
// //     console.log('Error with data fetching', e)
// //   }
// // )

// // setTimeout(() => {
// //   database.ref('job/title').set('Manager')
// // }, 3500)

// // database
// //   .ref('location/city')
// //   .once('value')
// //   .then(snapshot => {
// //     const val = snapshot.val()
// //     console.log(val)
// //   })
// //   .catch(e => {
// //     console.log('Error fetching data', e)
// //   })

// // database
// //   .ref()
// //   .set({
// //     name: 'Mikael Johansson',
// //     age: 26,
// //     stresslevel: 6,
// //     job: {
// //       title: 'Software developer',
// //       company: 'Google'
// //     },
// //     location: {
// //       city: 'New York',
// //       country: 'United States'
// //     }
// //   })
// //   .then(() => {
// //     console.log('Data is saved!')
// //   })
// //   .catch(e => {
// //     console.log('This failed.', e)
// //   })

// // database.ref().update({
// //   stresslevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // })

// // database
// //   .ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed')
// //   })
// //   .catch(e => {
// //     console.log('Did not remove data', e)
// //   })
