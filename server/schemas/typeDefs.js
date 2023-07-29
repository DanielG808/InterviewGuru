const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
}

type Question {
    _id: ID!
    question: String!
    answer: Answer
}

type Answer {
    _id: ID!
    userAnswer: String!
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
}

type Mutation {
    addQuestion: Question!
    addAnswer(userAnswer: String!): Answer!
}
`;

module.exports = typeDefs;
