# Cat-Posting

Fun little personal project that I used to explore AWS S3 and build a simple Full-Stack project.

## What I used

**PERN Stack**: PostgreSQL, Express.js, ReactTS, Node.js\
**AWS**: S3 bucket for image hosting\
**REST API**: POST, GET, PUT, DELETE; communicates with Postgres db\
I also used Postman for testing.


## What is it?

A simple "Social Media" web-app. Allows for sign-up, login and image posting. 

 - Users signup with a username and password 
 - Users login with their username and password
	 - Authentication is handled with a global state
		 - Definitely not the best way but its what I though of 
- Users then have access to create a post
	- Title, image, and description
		- Image sent to AWS
			- Only image types supported by chrome (ex. not tiff)
		- Title, AWS access link, description, username all added to a "post" database entry
- After post is created users are taken back to homepage, once they leave the homepage they are signed out

## Video
https://www.youtube.com/watch?v=8xlSnNd-Iz8

## Images
![image](https://github.com/user-attachments/assets/6fc55308-dab4-4a5e-9dcf-c301be0fa05b)
![image](https://github.com/user-attachments/assets/f48e3ed4-2099-47d3-b604-c35ace67d3e4)
![image](https://github.com/user-attachments/assets/d2f62ed6-06c7-4366-a571-7e31a005ab95)
![screencapture-localhost-5173-AuthHome-2025-02-16-16_32_23](https://github.com/user-attachments/assets/3d5ab586-4a4c-42ab-be1f-fafc5797d736)
![screencapture-localhost-5173-CreatePost-2025-02-16-16_33_09](https://github.com/user-attachments/assets/e2ceecae-9bb6-469a-93e1-9c918cb270be)
![screencapture-localhost-5173-AuthHome-2025-02-16-16_33_20](https://github.com/user-attachments/assets/d41f5a80-aefb-419d-ba09-ff60ccfddce0)
