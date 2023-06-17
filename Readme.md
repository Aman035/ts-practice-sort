## SORT

#### Project Goal

To Sort a numbers array or string or Linked list using Buble Sort

#### Steps To Run

##### 1. Install Dependencies

`npm i
`

##### 2. Run Development Server

`npm run dev
`

##### 3. Run Production Server

`npm start
`

#### Notes For Dev

##### Script Setup Process

Using Nodemon for development server to monitoring changes and refreshing
Standard Script commands defined in package.json
Specifying tsc config for build by changing tsCongif.json ( set up using tsc --init )

##### V1

Sorter needs to have type guards and change sort fn according to that
Issue - Hard for any dev to write sorting algo differently for diff data structures.

##### V2

One sort with comapare and swap fn where implementation of these fn is different based on structure
Benefit - It is easier of dev to write compare and swap fn for a data structure rather than the whole sorting algo.

##### V3

Since sorter in itself does not have any use - it can be used with any of the class supporting ICollection.
So it makes sense to have sorter as an **Abstract Class** stating that it cannot be declared directly but has to be used with child classes only.
