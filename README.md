### Objective

This project implements a website showcasing and notifying visitors about
the next SpaceX rocket launch, and displays details about next launches.

### Brief

You're the last Front-End developer on earth. Everyone is leaving and going to Mars,
to live a safer, cooler life there. The one problem is, people need to know when the next launch
is happening, and that's where you come in the picture. You need to build a website that informs
the public about the next launch, and give them information about future launches.
Everyone is counting on you, go write that website.

### Implementation

The project is bootstrapped with create react app and uses

-   Language: **JavaScript**
-   Framework: **React**
    It connects to the **SpaceX-API** (Docs and playground: `https://github.com/r-spacex/SpaceX-API/tree/master/docs/v4`)
-   Has two screens with navigation
-   Displays a live countdown showing days, hours, minutes and seconds
-   The 'Upcoming Launches' screen/section displays the mission name, date, and launchpad like in the design
-   Has a share button for social media platforms, to share the next launch with friends
-   Fetches data safely with axios, with a fallback when an error occurs
-   Each launch should has a 'Bookmark' or 'Favorite' button, that adds it to a seperate 'Favorites'
    table/screen. This is implemented using local storage (either save the launches data or its id for
    later fetching)

### API Endpoints

Two SpaceX Api endpoints are used to retrieve data

-   Next Launch Counter: 'https://api.spacexdata.com/v4/launches/next'
-   Upcoming Launches: 'https://api.spacexdata.com/v4/launches/upcoming'

With these endpoints, a simple GET request provides all the data no authentication has been implemented.

### Deliverables Checklist

-   [ ] Make sure to include all source code in the repository.
-   [ ] **JavaScript** best practices
-   [ ] How you approach work through your commit history
-   [ ] Completeness: did you complete the features?
-   [ ] Correctness: does the functionality act in sensible, thought-out ways?
-   [ ] Maintainability: is it written in a clean, maintainable way?
-   [ ] Testing: is the system adequately tested? do your components have unit tests?
-   [ ] Responsiveness and full mobile compatibility
-   [ ] Elegantly use placeholders/skeletons when fetching data
-   [ ] Does the app look and feel all right visually?
