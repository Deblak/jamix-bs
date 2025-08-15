# jamix-bs

Customized Bootstrap 5 build for the [Jamix app](https://github.com/Deblak/jamix-app).  
Improves design consistency and reduces unused styles.  
It's possible to deployed internally via a Jenkins job (not public)

### Color variables

The main theme overrides are defined in scss/custom.scss.  
Example:
```scss
$light: #f3f1f5;
$dark: #09132c;
$primary: #5f50bf;
$secondary: #9A53DE;
$danger: #E0340D;
$warning: #fdce47;
````

<img src="https://github.com/user-attachments/assets/464c6ae2-11a3-4ce7-a7c7-f7fe320e2c81" alt="image" width="600">


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
