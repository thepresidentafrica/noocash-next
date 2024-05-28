export const resolvers = {
  Query: {
    currentNumber: () => 0,
  },
  Mutation: {
    incrementNumber: () => 0,
  },

  Subscription: {
    numberIncremented: {
      resolve: (payload: any) => payload.numberIncremented,
    },
  },
};
