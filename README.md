# Nicolas Hardmeier Test

I tried to keep it as simple as possible and using best practices at the same time.
The project is made in Vue js. with Vue-CLI.
I used vuex store to set the inhabitants in the state through an action that uses axios to get the data.
Then a couple of getters are set, one to get all inhabitants, and the other used in the Inhabitant Detail Component to retrieve the inhabitant by id, using the route params.

In the Inhabitants List Component I first load the inhabitants, in the mounted lifecycle I dispatch the "load inhabitants" action and then from the computed properties retrieve the inhabitants filtered by the search query, then slice the first 10 to display it. 

There is a watcher looking for the bottom of the window, when the bottom is reach triggers the method "load more", that concat another slice of inhabitants into the inhabitantsToDisplay array, the one used in the template.
With this approach an infinite scroll effect is created and the data to be display is also slice into chunks for a better performance.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

