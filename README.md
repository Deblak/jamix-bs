# jamix-bs

Customized Bootstrap 5 build for the [Jamix app](https://github.com/Deblak/jamix-app).  
Improves design consistency and reduces unused styles.  
It's possible to deployed internally via a Jenkins job (not public)

### Color variables

The main theme override is defined in `scss/custom.scss.  
Color exemple:
```scss
$primary: #5f50bf;
$secondary: #9A53DE;
$warning: #fdce47;
$danger: #FD6B3F;
````
<img src="https://github.com/user-attachments/assets/b1a288c7-40a1-48ae-b58e-c185c9aa867a" alt="image" width="300">



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
