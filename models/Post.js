class OnePost {
    constructor(id, imageUrl, title, description, date, likes, comments, author, authorLogo) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.title = title;
        this.description = description;
        this.date = date;
        this.likes = likes;
        this.comments = comments;
        this.author = author;
        this.authorLogo = authorLogo;
    }

    get readableDate() {
        return this.date.toLocaleDateString('en-EN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

export default OnePost;