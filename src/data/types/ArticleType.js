/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const ArticleType = new ObjectType({
  name: 'ArticleLink',
  fields: {
    title: { type: new NonNull(StringType) },
    link: { type: new NonNull(StringType) },
    author: { type: StringType },
    publishedDate: { type: StringType },
    contentSnippet: { type: StringType },
  },
});

export default ArticleType;
