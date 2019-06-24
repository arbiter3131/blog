export class Post {
    createdAt = Date();

    constructor(public title: string, public content: string, public loveIts: number) { }
}
