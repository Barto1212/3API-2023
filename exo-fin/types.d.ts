export interface NewPost {
    title: string,
    description: string,
    date: Date,
    img: string,
    author: string,
    likes: number
}

export interface Post extends NewPost {
    _id: string
}