# Frontend 1 - Register

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
      <th align="left" >This page facilitates user login. It should be the first thing a user sees when they first visit your website. Users must be logged in before performing any other actions on your website. For all responses from the server we would like to see a <code>alert(JSON.stringify(response, null, 2))</code> of the response</th>
    </tr>
  </tbody>
</table>

## Register Page

<table>
  <thead>
    <tr>
      <th align="left" width="1100">📄&nbsp;&nbsp;Register</th>
    </tr>
  </thead>
  <tbody>
    <tr></tr>
    <tr>
      <th align="left" >This page facilitates user account registration. For all responses from the server we would like to see a <code>alert(JSON.stringify(response, null, 2))</code> of the response</th>
    </tr>
  </tbody>
</table>

# Video Submission

## Create a video submission. 
YouTube private video, shared by link, works well for video submission for this class. Video submissions should be less than 2 minutes long and follow this scenario:
1. Off-screen, deploy your IDM microservice and mini-frontend on your local device. Do not include this part in the video.
2. Open your browser and open a network panel (`CTRL + SHIFT + J` on Windows, or `COMMAND + OPTION + J` on Mac). Keep this panel open as you continue with the following steps.
3. Try to log in using an unregistered username and password. 
   - They should have a alert with a response with a result.message of `User not found`
5. Next, register a new user (e.g., with login panteater@uci.edu and a password of your choice).
   - They should have a alert with a response with a result.message of `User registered successfully`
6. Log in using the user you just registered (e.g., panteater@uci.edu).
   - They should have a alert with a response with a result.message of `User logged in successfullyy`
 
## Submit the video
Submit a link to your video on the corresponding Canvas assignment.
