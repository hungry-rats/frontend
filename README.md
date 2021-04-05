# Welcome to Seefood!

## Project Description - What did we cook up?
We built this application as a platform for users to discover their new favorite recipe and share their culinary creations. Users can browse their feed, click on recipes that look tasty, and then add comments once they've given the recipe a try. This application can help users dodge the clutter and mess that's so ubiquitous on so many other recipe websites. Everyone reading this can probably relate to needing to scroll through several pages-worth of text just to arrive at a simple 4 step recipe!

## What Features did you bake in?
Seefood demonstrates full CRUD functionality for recipes and CRD (no updates as of this version) functionality for comments.

Seefood lets users post their original recipes, add relevant details (allergens that may be in the recipe, stating their inspiration, uploading the perfect picture) and comment on other recipes that catch their eye. Users must sign-up prior to use (requiring a username, password and email address) and are then able to post, edit, and delete their recipes. Comments can be posted and deleted, but not edited as of this time.

##User Stories for this Application:
In the process of developing this application, we drafted the following User Stories to guide our priorities and work process.

As a user, I want to:
- Interact with a clean and intuitive interface
- Clearly understand the purpose of this app - what’s my reason for use?
- When in need of assistance, be able to easily arrive / come across clean and to-the-point instructions for use.
- Know from where foods foods are originating (i.e. be presented with pertinent information)
- Know where ingredients are in the recipe along with allergy warnings
- Have a seamless user experience; no lags, bugs, hiccups
- Supposing the app has user authentication, I want to be able to seamlessly login in and access all relevant content

## Our preliminary wireframes for this project:
The below wireframes shaped our development, and later, our design process. We built thse out using Google slides. While our final components differ from these wireframes, they served as guideposts for our development and are hereby included as a reflection of our thought-process early in this project.

<img width="1009" alt="Screen Shot 2021-03-28 at 2 54 38 PM" src="https://user-images.githubusercontent.com/63027187/113522281-31897d00-956d-11eb-8242-f70860da949e.png">


<img width="983" alt="Screen Shot 2021-03-28 at 3 03 27 PM" src="https://user-images.githubusercontent.com/63027187/113522286-4403b680-956d-11eb-9f2f-579bbe060bf9.png">

<img width="931" alt="Screen Shot 2021-03-28 at 3 11 15 PM" src="https://user-images.githubusercontent.com/63027187/113522291-49610100-956d-11eb-886a-30c1f8389fa9.png">

## Which technologies were used for this project?
Seefood's front end was constructed using React.js. Several of our component were constructed using [React Bootstrap] (https://react-bootstrap.github.io/), namely our carousels (can be found on our landing page alongside a bootstrapped jumbotron component), buttons (can be found throughout the application) and card components (found on our main feed). The remainder of our app was constructed via React. At times we used styled components, but we otherwise created style sheets via CSS. React Router was used for construction of our application's navigation. All http requests are made using Axios. We thought using Axios was a smart choice due to automatically transformed our data into .json and additionally for its ease of use.

##Installation Instructions (Follow this recipe!):
After having forked and cloned our code to a directory on your machine, you should run the below code to ensure you have all neccessvary dependencies installed.
```
npm i
```
Wanna try this recipe out? Our Contribution Guidelines:
We'd love for you to contribute to our recipe. Here you can find our [frontend] (https://github.com/hungry-rats/frontend) as well as our [backend] (https://github.com/hungry-rats/backend).
