# Frontend 2 - Search

 - [Pages](#pages)
 - [Video Submission](#video-submission)

# Pages

## Login Page (Already Implemented)

<table>
  <thead>
    <tr>
      <th align="left" width="1100">📄&nbsp;&nbsp;Login</th>
    </tr>
  </thead>
  <tbody>
    <tr></tr>
    <tr>
      <th align="left" >This page facilitates user login. It should be the first thing a user sees when they first visit your website. Users must be logged in before performing any other actions on your website. If the login process succeeds, the user will be redirected to the home page.</th>
    </tr>
  </tbody>
</table>

## Register Page (Previously Implemented)

<table>
  <thead>
    <tr>
      <th align="left" width="1100">📄&nbsp;&nbsp;Register</th>
    </tr>
  </thead>
  <tbody>
    <tr></tr>
    <tr>
      <th align="left" >This page facilitates user account registration. If the register process succeeds, the user will be redirected to the login page.</th>
    </tr>
  </tbody>
</table>

## Search Page

<table>
  <thead>
    <tr>
      <th colspan="2"  align="left" width="1100">📄&nbsp;&nbsp;Search</th>
    </tr>
  </thead>
  <tbody>
    <tr></tr>
    <tr>
      <th  colspan="2" align="left" >This view allows a logged-in user to search for movies. It should include a search bar, filters, and a results area. It will make a REST call to the <code>/movies/search</code> endpoint of your Movies microservice. This page view should include at least the following elements:</th>
    </tr>
    <tr>
      <th align="left">Search Bar</th><th align="left" >This area is where users can enter text pertaining to movies they want to view. There should be a search button next to it that will execute the search.</th>
    </tr>
    <tr></tr>
    <tr>
      <th align="left" >Filters</th><th align="left" >Users will be able to search for movies by title, year, or director individually (you are not required to implement combined searches). You may implement these filters using radio buttons, a dropdown list, or any other graphical element you prefer. The filters should be located near the search bar for ease of use.</th>
    </tr>
    <tr></tr>
    <tr>
      <th align="left" >Results Area</th> <th align="left" >All results from a search query will be displayed here as a table. The table will have columns corresponding to each movie's title, year, and director. Pressing the search button (mentioned previously, next to the search bar) should execute a new search and update these results.</th>
    </tr>
  </tbody>
</table>

# Video Submission

## Create a video submission. 
YouTube private video, shared by link, works well for video submission for this class. Video submissions should be less than 2 minutes long and follow this scenario:
1. Off-screen, deploy your IDM Service, your Movies service, and your mini-frontend on your local device. Do not include this part in the video.
2. Open your browser and open a network panel (`CTRL + SHIFT + J` on Windows, or `COMMAND + OPTION + J` on Mac). Keep this panel open as you continue with the following steps.
3. Navigate to your website. (we should see the Login View with a link to Register Page)
4. Navigate to the Register View. Register a new user. (we should see a switch to the Login Page)
5. Login using the user you just created. (we should see a switch to Home Page)
6. Search for movies with `game` in their title. If necessary, scroll to show the results.
7. Search for movies with directors named `Chris`. If necessary, scroll down to show the results.
8. Search for movies released in the year `2005`. If necessary, scroll down to show the results.

## Submit the video
Submit a link to your video on the corresponding Canvas assignment.
