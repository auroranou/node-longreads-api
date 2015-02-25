# Longreads REST API

Longreads aggregates long-form fiction and non-fiction articles from around the world. This API theoretically provides programmatic access to read Longreads data. Currently, only a few hundred records are in the database. See the 'Build your own!' section below for instructions to set up a local version, which can be as extensive as you would like.

Responses are available in JSON. Article records are structured in the following format:

```
{
  title: string,
  articleUrl: string,
  author: string, 
  source: string,
  pubDate: string,
  minuteLength: integer,
  wordLength: string
}
```

## Querying the API

The base URI for this API is: [https://longreads-api.herokuapp.com/](https://longreads-api.herokuapp.com/).

Each JSON endpoint returns an array of story objects. Four endpoints are currently available:

### GET longreads/short
Returns stories from the Longreads archive that are shorter than 15 minutes.

### GET longreads/medium
Returns stories that are longer than 15 minutes, but shorter than 30 minutes.

### GET longreads/long
Returns stories that are longer than 30 minutes, but shorter than 45 minutes.

### GET longreads/longest
Returns stories that are longer than 45 minutes.


## Build your own!

The data behind this API is scraped from Longreads' source code. The scraper populates a database, which is made available through this API. You can fork and tailor the scraper script to suit your needs [here](https://github.com/auroranou/longreads_scraper).

## Disclaimer

This data does not belong to me and I am not profiting from it. Please don't sue me. 
