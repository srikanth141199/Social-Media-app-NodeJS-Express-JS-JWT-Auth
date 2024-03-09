export default class PostModel{
    constructor(id, userId, caption, imageUrl){
        this.id = id,
        this.userId = userId,
        this.caption = caption,
        this.imageUrl = imageUrl
    }

    static add(userId, caption, imageUrl){
        const id = posts.length+1;
        const post = new PostModel(id, userId, caption, imageUrl);
        posts.push(post);
        return posts
    }

    static getAll(){
        return posts;
    }

    static delete(id, userId){
        const postIndex = posts.findIndex( post => post.id == id && post.userId == userId);
        
        if(postIndex != -1){
            posts.splice(postIndex,1);
            return posts
        }
        else{
            return undefined;
        }
    }

    static postDetails(id){
        const post = posts.find(post => post.id == id);
        return post;
    }

    static userPosts(userId){
        const posts_res = posts.filter( post => post.userId == userId);
        return posts_res;
    }

    static updatePost(id, userId, caption, imageUrl){
        const postIndex = posts.findIndex( post => post.id == id && post.userId == userId);
        if(caption != null){
            posts[postIndex].caption = caption;
        }
        if(imageUrl != null){
            posts[postIndex].imageUrl = imageUrl
        }
        return posts[postIndex];
    }
}

var posts = [
    new PostModel(
        1,
        1,
        "My cute dog",
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybjc2X3Bob3RvX29mX2JhYnlfbGFicmFkb3JfeWF3bmluZ19pc29sYXRlZF9vbl93aGl0ZV82YjVmMTIwMS02ZTU1LTRiMzQtOWQ4ZC0yNTM0NWQ4MmM3MDEucG5n.png"
    ),
    new PostModel(
        2,
        2,
        "My cute cat",
        "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
    ),
    new PostModel(
        3,
        1,
        "Flower",
        "https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709924400&semt=ais"
    )
]

export { posts };