# Star Launch

A single page app that provides the functionality to search for failed launches of a launch pad and all the satellites of Star Link by date. 

> ###### Frontend: React, Ant Design Library
> ###### API: SpaceX API

Please check out the live demo here:

[Star Link](https://star-launch.vercel.app/)

You may select to search for failed launches by launch pad (Launch Pad), or to search the satellites (Star Link).

![starlaunch_landing](https://user-images.githubusercontent.com/49362324/152183656-15ab3fdf-234d-4ec7-a3b7-aa4d58880b08.png)

Click on Launch Pad.

![starlaunch_launchpage](https://user-images.githubusercontent.com/49362324/152183699-eccadee8-5982-48d2-85ba-c40e921ff7e8.png)

Paste in the launch pad id with failure launches. 
```
5e9e4502f5090995de566f86
```

![starlaunch_launchpage_result](https://user-images.githubusercontent.com/49362324/152183732-5629dfe2-536b-4562-9135-4cfd13add72d.png)

Paste in the launch pad id with no failure launches. 
```
5e9e4502f509092b78566f87
```
![starlaunch_launchpage_nofailureresult](https://user-images.githubusercontent.com/49362324/152183788-501fd429-be2f-4e7c-b690-430fc14f2a11.png)

Type in random id and you are expecting to see this response:

![starlaunch_launchpage_idnotfound](https://user-images.githubusercontent.com/49362324/152183837-c7428b65-4ee5-4d62-b376-0ee9b10d3958.png)

Click on "Star Link" at the bottom right of Launch Page.

You may pick the filter to search by date, month, or year.

![starlaunch_starlink_showresults](https://user-images.githubusercontent.com/49362324/152183888-3cc4fcfa-fca8-4822-a257-17cc1b5adbe8.png)


You may git clone and run tests for the util functions (located in src/utils/library.test.js). 
```npm run test```



