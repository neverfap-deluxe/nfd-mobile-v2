const fse = require('fs-extra');
const axios = require('axios');
const lodash = require('lodash');

const { ARTICLES_URL, PRACTICES_URL, PODCASTS_URL, MEDITATIONS_URL } = require('./const');

const { saveList, createScreens } = require('./util/generateApiUtil');

const saveListApiArticles = async () => {
  try {
    const response = await axios.get(ARTICLES_URL);
    const items = response.data.data.articles;

    saveList(items, 'articles');
    saveList(items, 'articles', 5);
    createScreens(items, 'articles');

  } catch(error) {
    throw new Error(`saveListApiArticles - ${error}`);
  }
};

const saveListApiPractices = async () => {
  try {
    const response = await axios.get(PRACTICES_URL);
    const items = response.data.data.practices;

    saveList(items, 'practices');
    saveList(items, 'practices', 5);
    createScreens(items, 'practices');

  } catch(error) {
    throw new Error(`saveListApiPractices - ${error}`);
  }
};

const saveListApiMeditations = async () => {
  try {
    const response = await axios.get(MEDITATIONS_URL);
    const items = response.data.data.meditations;

    saveList(items, 'meditations');
    saveList(items, 'meditations', 5);
    createScreens(items, 'meditations');

  } catch(error) {
    throw new Error(`saveListApiMeditations - ${error}`);
  }
}

const saveListApiPodcasts = async () => {
  try {
    const response = await axios.get(PODCASTS_URL);
    const items = response.data.data.podcasts;

    saveList(items, 'podcasts');
    saveList(items, 'podcasts', 5);
    createScreens(items, 'podcasts');

  } catch(error) {
    throw new Error(`saveListApiPodcasts - ${error}`);
  }
}

const saveListApiOther = async () => {
  try {
    const other = [
      {
        title: "Podcasts",
        description: "The NeverFap Deluxe Podcast",
        content: "The NeverFap Deluxe Podcast",
        url: null,
      },
    ];

    const links = [
      {
        title: "About",
        description: "About NeverFap Deluxe",
        content: "Learn",
        url: null,
      },
      {
        title: "Twitter",
        description: "Follow NeverFap Deluxe on Twitter!",
        content: null,
        url: "https://twitter.com/neverfapdeluxe",
      },
      {
        title: "Reddit",
        description: "Join our Subreddit!",
        content: null,
        url: "https://reddit.com/r/NeverFapDeluxe/",
      },
      {
        title: "Discord",
        description: "Join our Discord!",
        content: null,
        url: "https://reddit.com/r/NeverFapDeluxe/",
      },
      {
        title: "Patreon",
        description: "Become a Patreon!",
        content: "Become a Patreon!",
        url: "https://patreon.com/neverfapdeluxe",
      },
      {
        title: "Website",
        description: "NeverFap Deluxe Website",
        content: "Learn",
        url: "https://juliusreade.com/",
      },
    ];

    saveList(links, 'links');
    saveList(other, 'other');
  } catch(error) {
    throw new Error(`saveListApiOther - ${error}`);
  }
}

saveListApiArticles();
saveListApiPractices();
saveListApiMeditations();
saveListApiPodcasts();
saveListApiOther();
