# jamix-bs

Customized Bootstrap 5 build for the [Jamix app](https://github.com/Deblak/jamix-app).  
Improves design consistency and reduces unused styles.  
It's possible to deployed internally via a Jenkins job (not public)

### Color variables

The main color overrides are defined in `_variables.scss`:

```scss
$primary:   #6f42c1;
$secondary: #adb5bd;
$success:   #198754;
$danger:    #dc3545;
$warning:   #ffc107;
$info:      #0dcaf0;
````

### Install and run
1- Clone the project  
2- Install dependencies  
```bash
npm install
```
3- Run to build your custom Bootstrap  
```bash
npm run build
```

Output files are in `/dist`.
Used as a custom Bootstrap CDN-like in the main Jamix app.
