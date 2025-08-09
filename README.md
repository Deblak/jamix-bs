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
$danger: #FD6B3F;
$warning: #fdce47;
````
<img src="https://github.com/user-attachments/assets/5eaa0d70-b3ec-4333-8f29-9f2e810b8beb" alt="image" width="600">



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
