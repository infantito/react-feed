// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    async user(
      parent,
      { id },
      { models }
    ) {
      return models.User.findById(id);
    },
    async posts(
      parent,
      { args },
      { models }
    ) {
      return models.Post.findAll();
    },
    async post(
      parent,
      { id },
      { models }
    ) {
      return models.Post.findById(id);
    },
  },
  Mutation: {
    async createPost(
      parent,
      { description, userId, date, available = true, },
      { models }
    ) {
      return models.User.create({
        description,
        userId,
        date,
        available,
      });
    },
    async updatePost(
      parent,
      { id, available },
      { models }
    ) {
      return models.Post.update(
        { available },
        { where: { id } },
      );
    },
    async deletePost(
      parent,
      { id },
      { models },
      info
    ) {
      return models.Post.destroy({
        where: { id },
      });
    },
  },
  User: {
    async posts(user) {
      return user.getPosts();
    },
  },
  Post: {
    async user(post) {
      return post.getUser();
    },
  },
}

module.exports = resolvers;
