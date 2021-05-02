# Trace Takehome

---
Hello! Thanks for taking time to go over this codebase and my work. I'm very excited for the opportunity and hope I showed what you were looking for in this exercise. I had a lot of fun doing this exercise and ended up going over the 3-4 hour recommendation; all in all, this probably took me about 6 hours? The app architecture (where server and client are completely separated) is something I've done before, so while that was not requested, I sprinkled that in to hopefully help increase my candidacy! :crossed_fingers:  


I am really humbled to be given this consideration,  thanks a ton for the opportunity!

## How to run:

### With docker and in "prod" environment:
- `./start-client.sh && ./start-backend.sh`

### Without docker/as contributer and in "dev" environment
- `cd server/`
- `python3 run.py`

(in separate terminal)

- `cd client/`
- `cp .env.example .env.local`
- Edit `REACT_APP_BACKEND_DOMAIN` variable in .env.local to wherever backend is running, probably http://localhost:8000
- `npm start`

## How to run tests
### Server Tests
- `cd server/`
- `python3 run_app_tests.py`

### Client Tests
- `cd client/`
- `CI=true && npm test` OR just `npm test` for watch mode






## Retrospective

### Technical Choices
- With no persistent layer, I moved the json file/data retriever to a separate `FarmJsonHelper`. The idea of this class is to help "get the data." Ideally, if we were to switch to a database, we could rename this and update the `get_farms` method to interface with the database instead so the endpoint does not have to change.
  - This also makes it easier to test the data getting part separate from the API
- Flask has a notion of "blueprints", while it's definitely overkill here, it would help us if we wanted to add additional REST APIs not related to farms. I personally also like the organization of it.
- On the client side, I decided to use a map library to help meet the requirements of viewing farms and their information. The rationale was twofold:
  1. I thought it would be a good change up from a typical table or text-based one might implement given these requirements.
  2. I wanted to play with a map library as I haven't done much of that before, might as well learn something interesting while doing this!
- React Context API was used for my state management / side effects. Most of my frontend state experience involves Redux and while I have used React Context a little bit before, I used it here again. Saved a lot of time not setting up the Redux boilerplate also haha.
- I added a 7th Farm into the data as I thought "how can we not have a farm in Iowa?!" and also realized my map looked a little empty with just the six :sweat_smile:
- The filtering of farms is still done via the API. Given that there are only 6 + 1 farms, I think doing the filtering on the frontend would be perfectly reasonable. However, I still implemented it as realistically as possible and really hope that's what you all were looking for!
- I added dev.Dockerfiles for both client/server for a developer/teammate to run a "production-like" environment locally and also to help anyone run it locally without setting anything up. Would implement similar files for production if we wanted to use docker for production.

### Assumptions / Tech Debt 
- SASS was added, but I barely touched its capabilities. A lot of random values and re-used chunks are lying about as I didn't want to spend too much time on styling. Couple of things I wanted to do:
  - making a palette file for brand colors
  - making a variables file for random values, like box-shadow
- The filters component could be broken out into a container that instantiates 3 individual filter components which would make it more robust for places where we might need just the name filter. I typically separate from the get go, but here I kept it as one component for time sake.
- The name filter also allows filtering by field type and soil type. This might be a little too black magicky and would be something to definitely talk about with the team. If we wanted to keep this, I would probably suggest adding comma separation so that a user could search by name, field and soil separately.
- The filters also do an "OR" query rather than "AND"s for the individual filters. I made this decision because we only had 7 farms in the dataset and doing an AND didn't yield anything special. OR allowed me to return distinct sets given the query. In a bigger data set, a user might expect ANDs, however.
- The client testing is really basic. Probably could/should set up more. I've played a bit with client E2E tests (e.g. Cypress) and would set that up as well.   


### Future direction / TODOs
- Fix assumptions and tech debt listed above, as needed/requested
- Add a persistent layer!
  - Might want to also add an ORM layer into our API depending on how "lightweight" we want to keep it.
- Also discuss w/ team and add geolocation for the farms/fields. This would allow me to pinpoint where the farms are rather than just picking random areas that I have in the file `constants.js`
- Getting this deployed would be fun. I already have the dev docker files, so could make a similar prod one and deploy it to the cloud. Getting it running directly on a server is also feasible.


I really appreciate being given consideration by you all and Trace! Having a background in bioinformatics and a passion for the life sciences, the thought of developing software for that world is something I always had in mind but haven't truly had a chance to do until now. It's an exciting position to be in, so again, thank you!


