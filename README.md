# My-WhiteBoard ([click here](https://my-white-board-real-time.herokuapp.com/))

## About the Project

This is a real-time whiteboard web-application. The project is mainly a front-end based hands-on practice project. The real-time whiteboard can be used for teaching purposes and for fun activities too.
The project comprises of a hamburger menu button at the top-left corner, clicking which, displays the toolbar for the whiteboard at the top-center of the screen.
There are 7 tools in the toolbar. These are:
1. Pen
2. Eraser
3. Sticky-Notes
4. Sticky-Image
5. Download
6. Undo, and
7. Redo

![image](https://user-images.githubusercontent.com/77784585/174044037-94d51672-94d2-4f36-923c-df3c19a1038d.png)
![image](https://user-images.githubusercontent.com/77784585/174044216-4535f3dd-a958-4790-b9ac-8661f293372c.png)

Let us now discuss the functions (tools) one by one.

## Tools

### Writing with the Pen
The experience of writing with the pen is smooth. By-default, the red pen will be selected and the default width of the line you draw is 2 on a scale of 2-10.

![image](https://user-images.githubusercontent.com/77784585/174044904-dd0e52b9-8563-4150-a032-9afeeb30fbae.png)

You get to pick from 3 colors viz, Red, Blue and Green. You can also increase the width of the pen stroke to a maximum 10 from a minimum 2.
By clicking on the pen icon, you get the option to change the color and width. The option disappears on clicking the icon again.

![image](https://user-images.githubusercontent.com/77784585/174045475-a5121444-001b-415c-8a41-86c96c29202c.png)

### Eraser

You can select the eraser by clicking on the eraser icon next to the pen icon. It also gives you an option to increase the eraser size as well.
The eraser gets deselected and the width option disapperas by clicking the icon again.
The following image shows the eraser action.

![image](https://user-images.githubusercontent.com/77784585/174045929-4d2f88c0-a13b-421c-bd4d-26d161c65a71.png)

### Sticky-Notes

You can add as many sticky notes as you want to. There are buttons to minimize and delete the sticky notes at the top right corners of the sticky notes.
Each sticky note can be minimized and deleted independent of the other.

![image](https://user-images.githubusercontent.com/77784585/174046891-1481f10e-7b75-4f1d-a089-6925bcdebd7e.png)

### Sticky-Image

Similar to sticky notes. Just, in place of text, you can pick an image from your local to add it up on the whiteboard.
Click the sticky-image icon. Now, select the image from your machine and it will appear on the whiteboard as shown below.

![image](https://user-images.githubusercontent.com/77784585/174047473-69d8778e-891d-4111-98ce-49c4602ee0c5.png)

Now, select any image.

![image](https://user-images.githubusercontent.com/77784585/174047585-3d21de19-9355-46a1-8421-a78ff4df4abe.png)

The image gets displayed on the whiteboard.

![image](https://user-images.githubusercontent.com/77784585/174047821-03c705c8-cfed-4f5a-9678-e200d7f01b6b.png)

The minimization, and deletion operation of the sticky-images is same as the sticky-notes.

###Download 

The download icon downloads you content in the form a jpg file. Please note that only the pen marks will be visible in the downloaded image and not the sticky notes and sticky images.

![image](https://user-images.githubusercontent.com/77784585/174048412-d3022c43-3f4d-478d-9d0c-9e58b5f22620.png)

The downloaded content looks like this in windows 11.

![image](https://user-images.githubusercontent.com/77784585/174048563-a1c7bf95-36a8-4910-9ef3-febd96727052.png)


### Undo and Redo

The pen and eraser operations can be undone as well as redone. Please note that the first time undo functionality appears after erasing once.

## Key Features
1. Easy and smooth drawing with multiple colors and variable pen stroke thickness.
2. Easy to use eraser with variable size.
3. Sticky notes and sticky images really come in handy.
4. Real-Time Application helps in teaching and other fun activities.
5. You can download your work as a jpg to refer later.

![image](https://user-images.githubusercontent.com/77784585/174049736-6deaff9e-ff16-4c11-8687-57e800b20fa4.png)

## Tech Stack Used

1. HTML
2. CSS
3. Javascript

Specifically, Canvas was used to draw and erase and Socket.io was used to establish a real-time application scenario.

## Run Whiteboard in your Local

Replace (https://my-white-board-real-time.herokuapp.com) with http://localhost:5000/ in index.html file.
Open the folder in VS code. Open terminal and write these commands:

### npm init

Complete the npm initialization and then write the following commands.

### npm i express
### npm i socket.io
### node app.js

## Want to Contribute?

Please feel free to suggest and improve bugs from the project. You can send me the pull request and let's work on it together.

## Reach Me

If you have any doubts or questions or want to discuss something, feel free to reach out to me. My LinkedIn profile is there in my GitHub Portfolio. 
