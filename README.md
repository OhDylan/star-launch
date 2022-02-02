# Star Launch

A single page app that provides the functionality to search for failed launches of a launch pad and all the satellites of Star Link by date. 

> ###### Frontend: React, Ant Design Library
> ###### API: SpaceX API

Please check out the live demo here:

[Star Link](https://star-launch.vercel.app/)

You may select to search for failed launches by launch pad (Launch Pad), or to search the satellites (Star Link).

![starlaunch_landing](https://user-images.githubusercontent.com/49362324/152179548-29dd3237-82fa-4361-bf40-02d45229e3d1.png)

Click on Launch Pad.

![starlaunch_launchpage](https://user-images.githubusercontent.com/49362324/152179644-d620a893-72b7-4b06-9c9a-3989a60afeca.png)

Paste in the launch pad id with failure launches. 
```
5e9e4502f5090995de566f86
```

![starlaunch_launchpage_result](https://user-images.githubusercontent.com/49362324/152180483-6d7e7185-a973-46b1-a2ce-a2c07fe6cac8.png)

Paste in the launch pad id with no failure launches. 
```
5e9e4502f509092b78566f87
```
![starlaunch_launchpage_nofailureresult](https://user-images.githubusercontent.com/49362324/152180737-4db5161e-643d-4a7f-be44-18be980040ce.png)


Type in random id and you are expecting to see this response:

![starlaunch_launchpage_idnotfound](https://user-images.githubusercontent.com/49362324/152180765-8bc1fe05-3bab-451c-8343-f44f10578adf.png)

Click on "Star Link" at the bottom right of Launch Page.

![starlaunch_starlink](https://user-images.githubusercontent.com/49362324/152180875-4160e6d7-4ca9-4ac5-ac61-50d751987068.png)

You may pick the filter to search by date, month, or year.

![starlaunch_starlink_showdatepicker](https://user-images.githubusercontent.com/49362324/152180999-b8db8c40-d763-4c67-a638-bab450adfafa.png)

![starlaunch_starlink_showresults](https://user-images.githubusercontent.com/49362324/152181043-1078b8e8-24ef-47d7-ad67-df4fefe21f36.png)

You may git clone and run tests for the util functions (located in src/utils/library.test.js). 



