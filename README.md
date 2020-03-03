# 🌈 Find Queer Media

A web app to find queer media by type, characters, theme and whether or not it has a happy ending.

Live link: https://find-queer-media.now.sh

This is an in development project, you can see the backlog and priority list on the Trello board here: https://trello.com/b/GzTemUKQ/find-queer-media

This is built and maintained by Joe Hart. Find me on twitter here: https://www.twitter.com/joehart

If you have any feature requests either tweet me publically, or drop me a DM on twitte and I'll get it added to the trello board 😊!

Data sources:

This is a gatsby set up where the extra data for queer finding is stored in json files under `/data`. The project then uses transformers to load in extra data from external sources.

- Books: `/data/books` (Google Books API)[https://developers.google.com/books]
- Movies: `/data/movies` (Open Movie Database)[https://www.omdbapi.com]
