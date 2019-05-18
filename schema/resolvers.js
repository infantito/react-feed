// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    async user(
      parent,
      { id },
      { db }
    ) {
      return db.user.findByPk(id);
    },
    async posts(
      parent,
      { userId },
      { db },
      info
    ) {
      return db.post.findAll({
        where: { userId, available: true, },
      });
    },
    async post(
      parent,
      { id },
      { db }
    ) {
      return db.post.findByPk(id);
    },
  },
  Mutation: {
    async createUser(
      parent,
      { fullname, nickname, password },
      { db }
    ) {
      return db.user.create({
        fullname,
        nickname,
        password,
      });
    },
    async createPost(
      parent,
      { description, userId, },
      { db }
    ) {
      return db.post.create({
        description,
        userId,
      });
    },
    async updatePost(
      parent,
      { id, description, },
      { db }
    ) {
      return db.post.update(
        { description },
        { where: { id } },
      );
    },
    async deletePost(
      parent,
      { id },
      { db },
      info
    ) {
      // return db.post.destroy({
      return db.post.update(
        { available: false },
        { where: { id } }
      );
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
