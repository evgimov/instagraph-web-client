# Instagraph Web Client

## Introduction

Instagraph Web Client is a web application people can use to visualize their Instagram post history.

It features a **calendar heatmap** that shows how many public posts an Instagram user made on each day of the year.

## Screenshot

![Screenshot of Instagraph Web Client](./instagraph-web-client-browser-screenshot.png)

## Technologies

Instagraph Web Client was built using the following technologies:

* React (via [`create-react-app`](https://github.com/facebookincubator/create-react-app))
* [React Calendar Heatmap](https://github.com/patientslikeme/react-calendar-heatmap)
* Redux
* Redux Thunk
* Semantic UI
* Fetch API
* Promise API
* Instagram HTTP API
* Jest
* ECMAScript 2015/ES6

## Features

Instagraph Web Client has the following features:

* **Interactive Calendar Heatmap**: When the visitor hovers over a date in the heatmap, the heatmap displays a tooltip containing information about that date
* **Client-Side Cache**: After the web application fetches data from the internet, it caches that data on the client side. Then, whenever the visitor's actions necessitate the retrieval of that data, the web application retrieves it from the cache instead of from the internet 
* **Loading Animation**: While the web application fetches data from the internet, it displays a loading animation
* **Redux DevTools Extension-Enabled**: Curious visitors can monitor the dispatching of Redux actions and examine their contents, by using the [Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) for Google Chrome 
* **HTTP API Utilization**: The web application retrieves Instagram post data via sequences of interdependent fetches to the Instagram HTTP API
* **Response Layout**: The layout of the page automatically adjusts itself to accommodate both wide and narrow screens

## Limitations

Instagraph Web Client has the following limitations:

* **Exceeds Instagram HTTP API Rate Limit**: Instagram limits the number of times a computer can access its HTTP API during a given time period. It is possible--for example, by submitting many distinct usernames in rapid succession--to cause this web application to exceed that limit on behalf of a visitor's computer. When that happens, the web application will display generic error information on the page and specific error information in the web browser's JavaScript console. Visitors can recover from that error by refraining from using the web application--and from otherwise accessing Instagram--for several minutes (e.g. 10 minutes).

## FAQ

1. **Q:** Is there an Instagraph Web Server (e.g. API) to complement Instagram Web Client?
    * **A:** No. Instagraph Web Client accesses the Instagram HTTP API directly. I chose this architecture in an attempt to avoid maintaining an additional web application and paying for additional web server cycles. An Instagraph Web Server could be created and placed in the middle to, for example, share cached data between visitors and display popular or recently-submitted usernames.
2. **Q:** If I exceed the Instagram HTTP API rate limit, will other Instagraph Web Client users be affected?
    * **A:** No, not unless they're using your computer. The Instagram HTTP API rate limit is applied per computer, not per web application.

## Demo
 
You can explore a live version of Instagraph Web Client at the following URL:

https://gitname.github.io/instagraph-web-client/