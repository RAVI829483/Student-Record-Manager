# Student Record Manager (React + Vite)

Add, delete, search and sort student records using DSA concepts:
- **HashMap** (separate chaining) keyed by roll number: O(1) add / delete / lookup
- **Merge sort**: O(n log n), stable, sorts by any column
- **Search**: exact roll number via hash lookup, name via linear scan

## Run
```
npm install
npm run dev      # open the URL shown in the terminal
npm run build    # production build in /dist
```

## Structure
```
src/
  main.jsx, App.jsx, index.css
  components/  Header, StatsCards, StudentForm,
               SearchSortBar, StudentTable, StudentRow, Toast
  hooks/       useStudents.js   (hash map + localStorage)
  utils/       HashMap.js, mergeSort.js, query.js, helpers.js
```
