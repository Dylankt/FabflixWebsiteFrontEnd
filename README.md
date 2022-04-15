# CS122B Frontend

- [Dependencies](#dependencies)
- [Create React App](#create-react-app)
- [Notes](#notes)

## Dependencies

#### react-router-dom 
Helps with user navigation throughout the website. \
[Website](https://github.com/remix-run/react-router) [npm](https://www.npmjs.com/package/react-router-dom)

#### react-hook-form
Useful Api for gathering user input in forms. \
[Website](https://react-hook-form.com) [npm](https://www.npmjs.com/package/react-hook-form)

#### axios
Api to make REST calls to our backends. \
[Website](https://axios-http.com/) [npm](https://www.npmjs.com/package/axios)

#### styled-components
Api for creating reusable css styled html components. \
[Website](https://styled-components.com/) [npm](https://www.npmjs.com/package/styled-components)

#### local-storage
Api to help with communication with the localStorage. \
[Website](https://github.com/bevacqua/local-storage) [npm](https://www.npmjs.com/package/local-storage)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Notes

### useForm()

This is a library that helps us with gathering input values from our users.
 
Whenever we make a html component that takes a value (\<input>, \<select>, ect) we call this function in this way:
 
```javascript
<input {...register("email")} > // With "email" being whatever you want to call the input
```
 
Notice that we have "{}" with a function call that has "..." before it. This is just a way to take all the stuff that is returned by register and *distribute* it as attributes for our components. Do not worry too much about the specifics of it, if you would like you can read up more about it on "react-hook-form"'s documentation:
[React Hook Form: register](https://react-hook-form.com/api/useform/register)
Their documentation is very detailed and goes into all of these functions with great examples. 
  
But to keep things simple: Whenever we have a html with input we will use that function with the name associated with that input, and when we want to get the value in that input we call:

```javascript
const { getValues, register, handleSubmit } = useForm();

const submit = () => {
    const email = getValues("email"); // This gets the current value in the input below
};
  
return (
  <input {...register("email")} > // With "email" being whatever you want to call the input
  <button onClick={handleSubmit(submit)}>Submit</button> 
  // Notice we pass submit WITHOUT the (), that is because we are passing a refrence to it, NOT calling it.
  // Here we give the function to submit inside of the handleSumbit() function
  // When the user clicks submit, react-hook-form will do some validation first, and then call our "submit" function
);
```
