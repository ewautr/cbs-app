class Post {
  constructor(id, authorName, authorImageUrl, title, date, body, category, imageUrl, likes, comments) {
    this.id = id;
    this.authorName = authorName;
    this.authorImageUrl = authorImageUrl;
    this.title = title;
    this.date = date;
    this.body = body;
    this.category = category;
    this.imageUrl = imageUrl;
    this.likes = likes;
    this.comments = comments;
  }

  get readableDate() {
    return this.date.toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}

export default Post;
