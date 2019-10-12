# Unit 05 Third-Party APIs Homework: Day Planner

A 9-5 day planner to save tasks per hour. This application is meant to allow a user to enter objectives per hour, and will change dynamically throughout the day to show the current hour, using JQuery and Moment.js. The day planner features localStorage, allowing the user to save their tasks locally.

## Approach

I first thought about how to divide the main problem into multiple tasks. My list of objectives was divided out into the following:

1. Get the current time and date
2. Create entry fields from 9AM to 5PM
3. Collect and save tasks entered by the user to localStorage
4. Write tasks already saved to localStorage to the planner
5. Dynamically change the styling of each entry field based on what hour it is

## Challenges

I decided to focus on the styling of the page first, including the JavaScript functionality. To get the current time and date I used Moment.js, and by reading through the documentation I was able to figure out how to get the current date and time. My issue was then to find a solution to change the blocks in the schedule to the appropriate colour based on the current hour. Retrieving all the rows of the schedule provided me with an array starting at 0. I found that by offsetting the current hour retrieved from Moment by 9, I could align it with the array and run a loop to decide if the the schedule block was in the past, present, or future.