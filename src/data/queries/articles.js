/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {GraphQLList as List} from 'graphql';
import ArticleType from '../types/ArticleType';
import { Article } from '../models';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);
let getArticles = Article.find({}).exec();

const articles = {
  type: new List(ArticleType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = getArticles
        .then(data => {
          items = data;

          return items;
        })
        .finally(() => {
          lastFetchTask = null;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default articles;
