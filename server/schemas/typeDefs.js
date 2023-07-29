const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
}

type Industry {
    _id : ID!
    name: String!
}

type Question {
    _id: ID!
    question: String!
}

type Auth {
    token: ID
    user: User
  }

type Query {
    questions: [Question]
    question(_id: ID!): Question
    allUsers: [User]
    findUserById(id: ID!): User
    industry: [Industry]
}

type Mutation {
    addQuestion: Question
}
`;

module.exports = typeDefs;
